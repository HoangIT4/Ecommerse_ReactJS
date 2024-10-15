import reloadIcon from '@icons/svgs/reload-icon.svg';
import styles from './styles.module.scss';
import SidebarProduct from '../../SidebarProduct/SidebarProduct';
const CompareForm = () =>{
    const {compareIcon,title} = styles
    return (  
        <div>
             <div className={compareIcon}>
                <img width={36} height={36} src={reloadIcon} style={{ filter: 'brightness(0) invert(0)' }} alt="reloadIcon"  />
                <p className={title}>COMPARE</p>
            </div>
            <SidebarProduct/>
        </div>
    );
}

export default CompareForm;