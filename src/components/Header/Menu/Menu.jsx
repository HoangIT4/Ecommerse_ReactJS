import styles from "../styles.module.scss"
import { Link } from 'react-router-dom';

function Menu({content,href}) {
    const {menu,link} = styles
    return (
        <div className ={menu} >
            <Link className={link} to={href}>{content}</Link>
        </div>
    )
}

export default Menu;