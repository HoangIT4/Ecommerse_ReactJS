import styles from "../styles.module.scss"
import { Link } from 'react-router-dom';

function Menu({content,href}) {
    const {menu,link} = styles
    return (
        <div className ={menu} >
            <div className={link} to={href}>{content}</div>
        </div>
    )
}

export default Menu;