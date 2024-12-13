import HotdealLogo from '@icons/images/hot-deal.png'
import styles from './styles.module.scss'
function Hotdeal() {
    const {container,title,divImg} = styles
    return (  
        <div className={container}>
            <div className={divImg}>
                <img src={HotdealLogo} style={{width:'60px',height:'60px'}}></img>
            </div>
            
            <div className={title}>Hot Deals</div>
        </div>
    );
}

export default Hotdeal;