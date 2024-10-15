import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss'


function SaleHealing() {
    const {container, headline, containerMiddleBox,title} = styles
    return ( 
        <MainLayout>
            <div className={container}>
                <div className={headline}></div>
                <div className={containerMiddleBox}>
                    <p className={title}>Exclusive offers</p>
                </div>
                <div className={headline}></div>
            </div> 
        </MainLayout>
    
);
}

export default SaleHealing;