import styles from './styles.module.scss'
import MyHeader from '@components/Header/Header'
import Banner from '@components/Banner/Banner'
import BannerBottom from '../BannerBottom/BannerBottom';
import AdvanceHealing from '../AdvanceHealing/AdvanceHealing';
import ListProducts from '../ListProducts/ListProducts';
import Footer from '../Footer/Footer';


function HomePage() {
    const {container} = styles
    return (  
        <div>
            <div className={container}>
                <MyHeader/>
                <Banner/>
                <BannerBottom/>
                <AdvanceHealing/>
                <ListProducts/>
                <div style={{
                    height: '300px'
                }}></div>
                <Footer/>
            </div>  
        </div>
    );
}

export default HomePage;