import styles from './styles.module.scss'

function SaleBanner() {
    const {container} = styles
    return (
        <div className={container}>
            <img src="	https://u-shop.vn/images/thumbs/0016674_Simple_Onsite_Header_1320x440.png" style={{width:'100%',borderRadius:'10px'}}></img>
        </div>
      );
}

export default SaleBanner;