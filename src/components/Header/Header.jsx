    import { dataMenu } from "./constants";
    import { useContext, useEffect, useState } from 'react';
    import { useNavigate } from "react-router-dom";
    import {Link} from 'react-router-dom';
    import Menu from "./Menu/Menu";
    import UserPopup from "./UserPopup/UserPopup";
    import styles from './styles.module.scss';
    import reloadIcon from '@icons/svgs/reload-icon.svg';
    import userIcon from '@icons/svgs/user-icon.svg';
    import wlIcon from '@icons/svgs/wish-list.svg';
    import cartIcon from '@icons/svgs/cart-icon.svg';
    import WhiteLogo from '@icons/images/White-logo.svg'
    import useScrolling from "../Hooks/useScollHealing";
    import classNames from 'classnames';
    import {SideBarContext} from '@/context/SidebarProvider'
    import {StoreContext} from '@/context/StoreProvider'




    function MyHeader() {
        const {containerMenu, containerHeader, containerBox , containerBoxIcon, container,fixedHeader,topHeader,user,user_popup} = styles
        const [showUserPopup, setShowUserPopup] = useState(false);
        const {scrollPosition} = useScrolling();
        const { userInfo } = useContext(StoreContext);
        const navigate = useNavigate();
        
        const [fixedPosition,setFixedPosition] = useState(false)
        const {setIsOpen,setType} = useContext(SideBarContext);
    
        

        const handleHover = () => {
            if(userInfo){
                setShowUserPopup(true);
            }
        };
    
        const handleLeave = () => {
            setShowUserPopup(false);
        };


        const handleOpenSidebar = (type) => {
            if (type === 'user' && userInfo) {
                setIsOpen(false);
                navigate('user/profile');
            } else {
                setIsOpen(true);
                setType(type);
            }   
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
                        <div className={user}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                        >
                            <img
                                width={22}
                                height={22}
                                src={userIcon}
                                style={{ cursor: 'pointer' }}
                                alt="userIcon"
                                onClick={() => handleOpenSidebar('user')}
                            />
                            {showUserPopup &&  
                                // <div className={user_popup}>
                                    <UserPopup setShowUserPopup={setShowUserPopup}/>
                                // </div>
                            }
                        </div>
                        <div>
                            <img width={22} height={22} src={reloadIcon} style={{ cursor: 'pointer' }} alt="reloadIcon" onClick={()=> handleOpenSidebar('compare')}/>
                        </div>
                        <div>
                            <img width={22} height={22} src={wlIcon} style={{ cursor: 'pointer' }} alt="wlIcon"  onClick={() => handleOpenSidebar('wishlist')}/>
                        </div>
                        <div>
                            <img width={22} height={22} src={cartIcon} style={{ cursor: 'pointer' }} alt="cartIcon"  onClick={() => handleOpenSidebar('cart')}/>
                        </div>
                        </div>
                </div>
            
                
            </div>
            
        );
    }

    export default MyHeader;