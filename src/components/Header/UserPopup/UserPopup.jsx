import styles from './styles.module.scss'
import  Cookies  from 'js-cookie';
import { useContext } from 'react';
import { StoreContext } from '@/context/StoreProvider'

function UserPopup() {
    const {popup} = styles
    const { userInfo ,handleLogOut} = useContext(StoreContext);

 

    return (
        <div className={popup} onClick={handleLogOut}>
           LOG OUT
        </div>
      );
}

export default UserPopup;