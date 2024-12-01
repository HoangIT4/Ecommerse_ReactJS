import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import styles from './styles.module.scss'

function CategoriesBrands() {
    const {container,textDiv,menuStyle} = styles

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
      };
      const Categories = [
        {
          label: 'Sản phẩm chăm sóc da',
          key: '1',
        },
        {
          label: 'Sản phẩm vệ sinh bếp',
          key: '2',
        },
        {
          label: 'Thực phẩm',
          key: '3',
        },
      ];

      const Brands = [
        {
            label: <span className={menuStyle}>P/s</span>,
          key: '1',
        },
        {
          label: <span className={menuStyle}>Omo</span>,
          key: '2',
        },
        {
          label:<span className={menuStyle}>Dove</span>,
          key: '3',
        },
      ];
    return ( 
        <div className={container}>
            <h3 className={textDiv}>Hot Deal</h3>
            <h3 className={textDiv}>
                <Dropdown
                    menu={{items:Categories, onClick,}}
                >
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Product Categories
                        <DownOutlined style={{fontSize:'14px'}}/>
                    </Space>
                    </a>
                </Dropdown>
            </h3>
            <h3 className={textDiv}>
                <Dropdown
                    menu={{items:Brands, onClick}}
                    
                >
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Our Brands
                        <DownOutlined style={{fontSize:'14px'}}/>
                    </Space>
                    </a>
                </Dropdown>
            </h3>
        </div>
     );
}

export default CategoriesBrands;