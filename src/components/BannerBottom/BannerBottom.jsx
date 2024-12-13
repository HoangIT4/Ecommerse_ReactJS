import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

function BannerBottom() {
    const {container,btn,title} = styles;
    const navigate = useNavigate();

    const handleNavigate = () => {
        
        navigate('/ourshop'); 
    }
    return ( 
        <div className={container}>
            <div className={title}>Click here to see more</div>
            <button className={btn} onClick={handleNavigate}>Go To Shop</button>
        </div>
    );
}

export default BannerBottom;