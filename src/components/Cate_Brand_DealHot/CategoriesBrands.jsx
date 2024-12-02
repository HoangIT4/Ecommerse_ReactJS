import React from 'react';
import { useState,useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import styles from './styles.module.scss';
function CategoriesBrands({ brands, categories }) {
    const {container,textDiv,menuStyle} = styles
  

    const onClick = ({ key }) => {
        // message.info(`Click on item ${key}`);
      };
      const categoriesMenuItems = categories .map((category) => ({
        label: <span className={menuStyle}>{category.categoryName}</span>,
        key: category.categoryID, 
      }));
    

      const brandsMenuItems =  brands.map((brand) => ({
        label: <span className={menuStyle}>{brand.brandName}</span>, 
        key: brand.brandID, 
      }));

    return ( 
        <div className={container}>
            <h3 className={textDiv}>Hot Deal</h3>
            <h3 className={textDiv}>
                <Dropdown
                    menu={{ items: categoriesMenuItems, onClick }}
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
                    menu={{ items: brandsMenuItems, onClick }}
                    
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