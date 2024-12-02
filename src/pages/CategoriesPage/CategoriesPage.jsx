import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss'
import { useState, useEffect } from 'react';
import { Checkbox } from 'antd';
import ListProducts from '@components/ListProducts/ListProducts';
import {getProducts} from '@/apis/productsService';
import { getBrands } from '@/apis/brandsService';
import { getCategories } from '@/apis/categoryService';
import React from 'react';

function Categoriespage() {
    const {
        container,
        categories,
        productList,
        brandsList,
        categoriesList,
        list

    } = styles

    const [listProducts,setListProducts] = useState([]);
    const [listBrands,setListBrands] = useState([]);
    const [listCategories,setListCategories] = useState([])


    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);



    const handleCategoryChange = (e, categoryName) => {
        const checked = e.target.checked;
        setSelectedCategories((prev) =>
            checked ? [...prev, categoryName] : prev.filter((name) => name !== categoryName)
        );
    };
    
    const handleBrandChange = (e, brandName) => {
        const checked = e.target.checked;
    
        setSelectedBrands((prev) =>
            checked ? [...prev, brandName] : prev.filter((name) => name !== brandName)
        );
    };
    

     // Lọc sản phẩm theo danh mục đã chọn
     const filteredProducts = listProducts.filter((product) => {
        // Nếu không chọn danh mục nào, sẽ không lọc
        if (selectedCategories.length === 0) return true;

        // Kiểm tra nếu sản phẩm có bất kỳ danh mục nào trong mảng categories khớp với danh mục đã chọn
        return product.categories.some((category) =>
            selectedCategories.includes(category)
        );
    });
    // const filteredProducts = listProducts.filter((product) => {
    //     const matchesCategory =
    //         selectedCategories.length === 0 || selectedCategories.includes(product.categoryName);
    //     const matchesBrand =
    //         selectedBrands.length === 0 || selectedBrands.includes(product.brandName);
    //     return matchesCategory && matchesBrand;
    // });

    
    useEffect(() => {
        getProducts()
        .then( res =>{
            console.log(res.data);
            
            setListProducts(res.data)
  
        });
        getBrands()
        .then(res => {
            setListBrands(res.data)
        });
        getCategories()
        .then(res => {
            setListCategories(res.data)
        })
    }, []);


    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

    return (
        <MainLayout>
            <div className={container}>
                <div className={categories}>
                    <div className={categoriesList}>
                        <div style={{fontSize:'18px'}}>NHÓM SẢN PHẨM</div>  
                        <div className={list}>
                            {listCategories.map((item) => (
                                <div key={item.categoryID}> 
                                    <Checkbox  
                                        onChange={(e) => handleCategoryChange(e, item.categoryName)}>
                                        {item.categoryName}
                                    </Checkbox>
                                </div>
                            ))}  
                        </div>
                    </div>

                    <div className={brandsList}>BRANDS</div>
                    <div className={list}>
                        {listBrands.map((item) => (
                            <div key={item.brandID}>
                            <Checkbox
                                onChange={(e) => handleBrandChange(e, item.brandName)}>
                                {item.brandName}
                            </Checkbox>
                        </div>
                        ))}  
                    </div>
                         
                </div>
                <div className={productList}>
                    <ListProducts data={filteredProducts}/>
                </div>
            </div>
        </MainLayout>
      );
}

export default Categoriespage;