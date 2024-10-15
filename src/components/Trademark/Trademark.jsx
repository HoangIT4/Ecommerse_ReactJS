import styles from './styles.module.scss'
import React from 'react';
import { Col, Row } from 'antd';


function Trademark() {
    const {container,title,boxContent,picture,trademark} = styles
    return (


    <div className={container}>
        <h2 className={title}>ALL BRAND</h2>
        <Row className={boxContent}>
            <Col span={18} push={6}>
                <div className={trademark}>
                    Thuong hieu
                </div>
            </Col>
            <Col span={6} pull={18}>
                <div className={picture}>
                    <img src='https://u-shop.vn/images/thumbs/0014485_563x630.jpeg' style={{width:'385px',height:'433px'}}></img>
                </div>
            </Col>
      </Row>
    </div>
      
    );
}

export default Trademark;