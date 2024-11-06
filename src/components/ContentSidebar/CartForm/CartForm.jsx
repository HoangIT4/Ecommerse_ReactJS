import cartIcon from '@icons/svgs/cart-icon.svg';
import styles from './styles.module.scss'
import SidebarProduct from '@components/SidebarProduct/SidebarProduct';
import { Flex,Button } from 'antd';

function CartForm() {
    const {container,CartIcon,title,boxContent,subtotal} = styles
    return ( 
        <div className={container}>
            <div className={boxContent}>
                <div className={CartIcon}>
                    <img width={36} height={36} src={cartIcon} style={{ filter: 'brightness(0) invert(0)' }} alt="cartIcon"  />
                    <p className={title}>CART</p>
                </div>
                <SidebarProduct/>
            </div>

            <div>
                <div className={subtotal}>
                        <div>SUBTOTAL:</div>
                        <div>$199.99</div>
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
                        View Cart
                    </Button>
                    <Button block style={{ width: '360px',height:'40px',fontSize:'20px',fontFamily:'"Roboto Mono", monospace',backgroundPositionL:'center'}}>
                        Check Out
                    </Button>
                </Flex>
            </div>
            
        </div>
     );
}

export default CartForm;