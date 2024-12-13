import styles from './styles.module.scss'

function TrademarkItem({name,imagePath}) {
    const {brandBox,title} = styles
    return (
        <div className={brandBox}>
            <div>
                <img src={imagePath} style={{width:'175px',height:'128px',objectFit:'contain'}}></img>
            </div>
            <div className={title}>{name}</div>
        </div> 
        );
}

export default TrademarkItem;
