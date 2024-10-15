import React, { useMemo,useEffect,useContext } from 'react';
import { Layout} from 'antd';
import '@styles/main.scss'
import LoginForm from '@components/ContentSidebar/LoginForm/LoginForm'
import CompareForm from '@components/ContentSidebar/CompareForm/CompareForm'
import WishListForm from '@components/ContentSidebar/WishListForm/WishListForm'
import styles from './styles.module.scss'
import { CloseOutlined } from '@ant-design/icons';
import { SideBarContext } from '@/context/SidebarProvider';
import classNames from 'classnames';


const { Sider } = Layout;

const Sidebar = () => {
  const {isOpen,setIsOpen ,type} = useContext(SideBarContext)
  const {container,overlay,sidebar,slideSidebar,closeIcon} = styles

  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderComponent = () => {
    switch (type) {
      
      case 'user':    
        return <LoginForm/>

      case 'compare':
        return <CompareForm/>

      case 'wishlist':
        return <WishListForm/>;

      case 'cart':
        return <div>Cart Component</div>;

      default:
        return null;
    }
  };
  return (
   
      <Layout className={container} >
        <div className={classNames({
            [overlay] : isOpen
          })}

          onClick={handleToggle}
         />
  
        <Sider className={classNames(sidebar,{
          [slideSidebar] :isOpen
        })} width={400} >
          {isOpen &&(
            <>
              <div className={closeIcon} onClick={handleToggle}>
                <CloseOutlined />
              </div>
              {renderComponent()}
            </>
              
            )}
            
            
          </Sider>
          
      </Layout>

      

    
  );
};

export default Sidebar;
