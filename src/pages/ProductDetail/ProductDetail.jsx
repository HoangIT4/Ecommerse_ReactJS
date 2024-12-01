import { useState,useEffect } from 'react';
import { Col, Row } from 'antd';
import { useParams } from 'react-router-dom';
import {getProductById } from '../../apis/productsService';
import styles from './productdetail.module.scss'
import reloadIcon from '@icons/svgs/reload-icon.svg';
import wlIcon from '@icons/svgs/wish-list.svg';
import MainLayout from '@components/Layout/Layout';
import { FormControl } from 'react-bootstrap';


function  ProductDetail({data}) {
    const { productId} = useParams();


    const {
        leftContent,container,
        mainContent,boxImg,
        anotherPicture,
        desciption,textContent,
        nameProduct,quantityBox,
        buttonStyle,quantityNumber
        ,headlineOR,headline,
        containerMiddleBox,
        des,containerBoxIcon,circle,
        DetailPro,title_detail,
        DetailDes
    } = styles;
    const [quantity,setQuantity]= useState(1);
    const [productData, setProductData] = useState(null);

    const handleIncrease = () => {
        if (quantity < productData.stock) { // Kiểm tra xem số lượng có nhỏ hơn tồn kho không
            setQuantity(quantity + 1);
        }
    }
    const handleDecrease = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    useEffect(() => {
        const fetchProductData = async () => {
          // Giả sử hàm getProducts là một hàm bất đồng bộ lấy danh sách sản phẩm
          const selectedProduct = await getProductById(productId);
          
          
          if (selectedProduct) {
            setProductData(selectedProduct);
          } else {
            console.error("Product not found");
          }
        };
        fetchProductData();
      }, [productId]);
    
      if (!data) return <p>Loading...</p>;
   

    return ( 
        <MainLayout>
            <div>
                <div className={container}>
                    <div className={mainContent}>
                        <div className={leftContent}>

                            <div className={boxImg}>
                                <div className={anotherPicture}>                         
                                        <img src={productData.preImg}  style={{width:'100px'}} alt="Secondary" />
                                    
                                </div>
                                <div>
                                <img src={productData.src} style={{ width: '400px', border: '1px solid #e1e1e1', borderRadius: '20px' }} alt="Main" />
                                </div>
                        
                        
                            </div>
                        </div>
                        
                        <div className={textContent}>  
                            <div className={nameProduct} style={{marginBottom:'15px'}} >
                            {productData.name}
                            </div>  
                            <div style={{fontSize:'18PX',color:'red'}} >{data.price}</div>    
                            <div style={{fontSize:'18PX'}}>Brand: {data.brand}</div>      
                            <div className={desciption}>
                                Description: {data.description}
                            </div>
                        
                            <div className={quantityBox}>
                                <div className={quantityNumber}>
                                <button type="button" className="quantity-btn" onClick={handleDecrease}  
                                    style={{
                                        border: 'none', // Bỏ viền
                                        fontSize: '20px', // Tăng kích thước nút
                                        backgroundColor: 'transparent', // Nền trong suốt
                                        color: '#000', // Màu chữ ban đầu
                                }}>
                                    -
                                </button>
                                <FormControl
                                    value={quantity}
                                    onChange={(e) => {
                                        const value = Number(e.target.value);
                                        if (value <= stock && value > 0) {
                                            setQuantity(value);
                                        }
                                    }}
                                style={{ 
                                    textAlign: 'center',
                                    
                                    border: 'none', // Bỏ viền cho ô input
                                    boxShadow: 'none', // Bỏ bóng mờ mặc định của input
                                    fontSize: '20px', // Cỡ chữ lớn hơn cho số lượng
                                    maxWidth: '40px', // Đảm bảo phần nhập số lượng không quá lớn
                                }}
                                readOnly
                                />
                                <button type="button" className="quantity-btn" onClick={handleIncrease}
                                style={{
                                    border: 'none', // Bỏ viền
                                    justifyContent:'center',
                                    fontSize: '20px', // Tăng kích thước nút
                                    backgroundColor: 'transparent', // Nền trong suốt
                                    color: '#000', // Màu chữ ban đầu
                                }}>
                                    +
                                </button>
                                </div>
                                <button type="button" className={buttonStyle}>ADD TO CART</button>
                            </div>
                            <div>Stock: {data.stock}</div>
                            <div className={headlineOR}>
                                <div className={headline}></div>
                                <div className={containerMiddleBox}>
                                    <p className={des}>OR</p>
                                </div>
                                <div className={headline}></div>
                            </div> 
                            <button type="button" className={buttonStyle}>BUY NOW</button>
                        
                            <div className={containerBoxIcon} >
                                <div className={circle}>
                                    <img width={24} height={24} src={reloadIcon} alt="reloadIcon" 
                                    style={{ 
                                        filter: 'brightness(0) invert(0)' ,cursor:'pointer',
                                        
                                    }}
                                    
                                    />
                                </div>
                                <div className={circle}>
                                    <img width={24} height={24} src={wlIcon} alt="wlIcon" style={{ filter: 'brightness(0) invert(0)',cursor:'pointer' }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={DetailPro}>
                    <div className={title_detail}>*DETAIL PRODUCT</div>
                    <Row>
                        <Col span={12}>
                            <div style={{padding:'10px',fontFamily:'"Roboto Mono", monospace',fontSize:'18px'}}>Nhóm sản phẩm :</div>
                            <div style={{padding:'10px',fontFamily:'"Roboto Mono", monospace',fontSize:'18px'}}>Dung tích khối lượng :</div>
                            <div style={{padding:'10px',fontFamily:'"Roboto Mono", monospace',fontSize:'18px'}}>Xuất xứ :</div>
                        </Col>
                        <Col span={12}>
                            <div style={{padding:'10px',fontFamily:'"Roboto Mono", monospace',fontSize:'18px'}}>Thực Phẩm</div>
                            <div style={{padding:'10px',fontFamily:'"Roboto Mono", monospace',fontSize:'18px'}}>380g</div>
                            <div style={{padding:'10px',fontFamily:'"Roboto Mono", monospace',fontSize:'18px'}}>Việt Nam</div>
                        </Col>
                    </Row>
                    
                </div>
                <div className={DetailDes}>
                    <div className={title_detail}>**DETAIL DESCRIPTON </div> 
                        <div>
                            Bí quyết của chuyên gia cho mái tóc được chăm sóc chuyên sâu ở salon luôn là thêm một bước kem ủ phục hồi. 
                            Thông qua việc ủ tóc, mái tóc bạn cũng sẽ nhận được những chất dinh dưỡng cần thiết, phục hồi và trở nên suôn mượt hơn. 
                            Tuy nhiên, thay vì phải ra salon thường xuyên mất nhiều thời gian và chi phí, TRESemmé đem lại cho bạn 
                            bí quyết dưỡng tóc từ các chuyên gia tạo mẫu tóc trên thế giới, cho mái tóc của bạn đẹp chuẩn salon ngay tại nhà.
                        </div>
                    
                </div>                   
            </div>
        </MainLayout>
     );
}

export default  ProductDetail;
