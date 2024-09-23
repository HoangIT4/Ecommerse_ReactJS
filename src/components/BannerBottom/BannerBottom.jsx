import styles from './styles.module.scss';

function BannerBottom() {
    const {container,btn} = styles
    return ( 
        <div className={container}>
            <div>Click here to see more</div>
            <button className={btn}>Go To Shop</button>
        </div>
    );
}

export default BannerBottom;