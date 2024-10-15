import styles from './styles.module.scss';
import { dataMenu } from "./constants";
import Menu from './Menu/Menu';

function Category() {
    const {containerMenu, container} = styles
    return ( 
        <div className={container}>
            <div className={containerMenu}>
                {
                    dataMenu.map((item) => {
                        return <Menu key={item.id} content={item.content} href={item.href}/>
                    })
                }
            </div>
        </div>

     );
}

export default Category;