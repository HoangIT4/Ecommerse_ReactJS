import { dataMenu } from "./constants";
import { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Menu from "./Menu/Menu";
import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reload-icon.svg';
import userIcon from '@icons/svgs/user-icon.svg';
import wlIcon from '@icons/svgs/wish-list.svg';
import cartIcon from '@icons/svgs/cart-icon.svg';
import WhiteLogo from '@icons/images/White-logo.svg'
import useScrolling from "../Hooks/useScollHealing";
import classNames from 'classnames';
import {SideBarContext} from '@/context/SidebarProvider'




function MyHeader() {
    const {containerMenu, containerHeader, containerBox , containerBoxIcon, container,fixedHeader,topHeader} = styles

    const {scrollPosition} = useScrolling();
    
    const [fixedPosition,setFixedPosition] = useState(false)
    const {setIsOpen,setType} = useContext(SideBarContext);
  

    
   
    const handleOpenSidebar = (type) => {
        setIsOpen(true)
        setType(type)
    };
    useEffect(()=>{
        if(scrollPosition > 100){
            setFixedPosition(true)
        }
        else{
            setFixedPosition(false)
        }
    
    },[scrollPosition])
    
 
    
    return ( 
        <div 
            className={classNames(container,topHeader,{
                [fixedHeader] : fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div>
                    <Link to="/">
                        <img src={WhiteLogo}
                        alt="Logo" 
                        style = {{
                            width: '153px',
                            height: '60px'
                        }}
                        />
                    </Link>
                </div>
                
                <div className={containerBox}>
                
                    <div className={containerMenu}>
                        {
                        dataMenu.map((item) => {
                            return <Menu key={item.id} content={item.content} href={item.href}/>
                        })}
                    </div>
                </div>
                
                  <div className={containerBoxIcon} >
                    <img width={26} height={26} src={userIcon} alt="userIcon"  onClick={() =>  handleOpenSidebar('user')}/>
                    <img width={26} height={26} src={reloadIcon} alt="reloadIcon" onClick={()=> handleOpenSidebar('compare')}/>
                    <img width={26} height={26} src={wlIcon} alt="wlIcon"  onClick={() => handleOpenSidebar('wishlist')}/>
                    <img width={26} height={26} src={cartIcon} alt="cartIcon"  onClick={() => handleOpenSidebar('cart')}/>
                </div>
            </div>
           
            
        </div>
        
     );
}

export default MyHeader;