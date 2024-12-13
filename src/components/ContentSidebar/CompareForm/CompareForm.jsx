import reloadIcon from '@icons/svgs/reload-icon.svg';
import styles from './styles.module.scss';
import SidebarProduct from '../../SidebarProduct/SidebarProduct';
import {  Flex, Button } from 'antd';
const CompareForm = () =>{
    const {container,compareIcon,title,boxContent} = styles
    return (  
        <div className={container}>
            <div  className={boxContent}>    
                <div className={compareIcon}>
                    <img width={36} height={36} src={reloadIcon} style={{ filter: 'brightness(0) invert(0)' }} alt="reloadIcon"  />
                    <p className={title}>COMPARE</p>
                </div>
            <SidebarProduct/>
            </div>
            <Flex
                vertical
                gap="10px"
                style={{
                    width: '100%',
                    display:'flex',
                    justifyContent: 'center', 
                    alignItems: 'center',    
                    maxWidth: '600px',
                    backgroundPosition: 'center' 
                }}
            >
                <Button type="primary" block style={{ width: '360px',height:'40px',fontSize:'20px',fontFamily:'"Roboto Mono", monospace',backgroundPositionL:'center'}}>
                  View Compare
                </Button>
            </Flex>
           
        </div>
    );
}

export default CompareForm;