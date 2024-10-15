import styles from './styles.module.scss';
import wlIcon from '@icons/svgs/wish-list.svg';

function WishListForm() {
    const {wishlIcon,title} = styles
    return (  
        <div>
            <div className={wishlIcon}>
                <img width={36} height={36} src={wlIcon} style={{ filter: 'brightness(0) invert(0)' }} alt="wlIcon"  />
                <p className={title}>WishList</p>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default WishListForm;