import React from 'react';
import { useState,useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { getCategoryById } from '@/apis/categoryService';

function CategoriesBrands({ brands, categories }) {
    const {container,textDiv,menuStyle} = styles
    const navigate = useNavigate()
  

    const onClickInDropdown = async ({ key }) => {
        try {
            const categoryData = await getCategoryById(key);
            console.log('Category Details:', categoryData.data); // Dữ liệu từ API
            message.info(`Navigating to category: ${key}`);
            navigate(`/categories/${key}`); // Điều hướng đến trang chi tiết
        } catch (error) {
            console.error('Error fetching category:', error);
            message.error('Failed to fetch category data.');
        }

      };
      const handleNavigateToCategoriesPage = () =>{
        navigate(`/categories`)
        
      }


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
            <h3 className={textDiv} onClick={handleNavigateToCategoriesPage}>
                <Dropdown
                    menu={{ items: categoriesMenuItems, onClick:onClickInDropdown }}
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
                    menu={{ items: brandsMenuItems,onClick:onClickInDropdown }}
                    
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