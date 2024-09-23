import { dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reload-icon.svg';
import userIcon from '@icons/svgs/user-icon.svg';
import wlIcon from '@icons/svgs/wish-list.svg';
import cartIcon from '@icons/svgs/cart-icon.svg';
import WhiteLogo from '@icons/images/White-logo.svg'


function MyHeader() {
    const {containerMenu, containerHeader, containerBox , containerBoxIcon, container} = styles

    return ( 
        <div className={container}>
            <div className={containerHeader}>
                <div>
                    <img src={WhiteLogo}
                    alt="Logo" 
                    style = {{
                        width: '153px',
                        height: '60px'
                }}/>
                </div>
                
                <div className={containerBox}>
                
                    <div className={containerMenu}>
                        {
                        dataMenu.map((item) => {
                            return <Menu content={item.content} href={item.href}/>
                        })}
                    </div>
                </div>
                
                <div className={containerBoxIcon}>
                    <img width={26} height={26} src={userIcon} alt="userIcon"/>
                    <img width={26} height={26} src={reloadIcon} alt="reloadIcon" />
                    <img width={26} height={26}  src={wlIcon} alt ="wlIcon"/>
                    <img width={26} height={26}  src={cartIcon} alt="cartIcon"/>
                </div>
            </div>
        </div>
        
     );
}

export default MyHeader;