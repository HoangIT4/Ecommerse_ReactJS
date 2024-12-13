import SidebarProduct from '@components/SidebarProduct/SidebarProduct';
import styles from './styles.module.scss';
import wlIcon from '@icons/svgs/wish-list.svg';
import {  Flex, Button } from 'antd';


function WishListForm() {
    const {container,boxContent,wishlIcon,title} = styles
    return (  
        <div className={container}>
            <div  className={boxContent}>  
                <div className={wishlIcon}>
                    <img width={36} height={36} src={wlIcon} style={{ filter: 'brightness(0) invert(0)' }} alt="wlIcon"  />
                    <p className={title}>WishList</p>
                </div>  
            <SidebarProduct/>
            </div>
            <Flex
                vertical
                gap="10px"
                style={{
                    width: '100%',
                    display:'flex',
                    justifyContent: 'center', 
                    alignItems: 'center',    
                    maxWidth: '600px',
                    backgroundPosition: 'center' 
                }}
            >
                <Button type="primary" block style={{ width: '360px',height:'40px',fontSize:'20px',fontFamily:'"Roboto Mono", monospace',backgroundPositionL:'center'}}>
                  View WishList
                </Button>
                <Button block style={{ width: '360px',height:'40px',fontSize:'20px',fontFamily:'"Roboto Mono", monospace',backgroundPositionL:'center'}}>
                  Add to Cart
                </Button>
            </Flex>
           
        </div>
    );
}

export default WishListForm;