import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss'


function AdvanceHealing() {
    const {container, headline, containerMiddleBox,des,title} = styles
    return ( 
        <MainLayout>
            <div className={container}>
                <div className={headline}></div>
                <div className={containerMiddleBox}>
                    <p className={des}>DON'T MISS SUPER OFFERS</p>
                    <p className={title}>Our featured products</p>
                </div>
                <div className={headline}></div>
            </div> 
        </MainLayout>
    
);
}

export default AdvanceHealing;