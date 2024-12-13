import styles from './styles.module.scss'
import React from 'react';
import TrademarkItem from '@components/AllBrand/TrademarkItem/TrademarkItem';


function Trademark({data}) {
    const {container,title,boxContent,trademark,brandsColume,horizontalLine,verticallLine } = styles

    console.log(data);
    
    return (


    <div className={container}>
        <h2 className={title}>ALL BRAND</h2>
        <div className={boxContent}>
            <div className={trademark}>
                <div className={brandsColume}>
                {data.map((item,index)=>(
                    <div>
                        <TrademarkItem
                            key={index}
                            name = {item.name}
                            imagePath = {item.imagePath}
                        />    
                        <div className={horizontalLine}/> 
                        <TrademarkItem
                            key={index}
                            name = {item.name}
                            imagePath = {item.imagePath}/>  
                    </div>
                    ))}  
                    
                </div>
                <div className={verticallLine}/>
                
            </div>   
            
      </div>
    </div>
      
    );
}

export default Trademark;