import styles from '../../styles.module.scss'
import CartSummary from './CartSumary';
import CartTable from './CartTable';

function Contents() {
    const {containerContents} = styles
    return (  
        <div className={containerContents}>
            <CartTable/>
            <CartSummary/>
        </div>
    );
}

export default Contents;