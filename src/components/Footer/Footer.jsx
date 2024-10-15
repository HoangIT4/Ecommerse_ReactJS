import { dataSuppost,dataPolicy } from './constant';
import styles from './styles.module.scss';
import WhiteLogo from '@icons/images/White-logo.svg';
import Payment from '@icons/images/thanhtoan.png';
import Menu from "./Menu/Menu";


function MyFooter() {
    const {container,first_box,content,second_box,top_boxes,suppost_box,policy_box,img_box} = styles

    return ( 
        <div className ={container}>
            <div className={first_box}> 
                <img src={WhiteLogo}
                    alt="Logo" 
                    style = {{
                        marginTop:'10px',
                        width: '153px',
                        height: '60px',
                    }}
                />
                <div>
                    <div className={content}>
                        <h3>Phone: 0968 367 560</h3>
                        <h3>Email: hoang0191266@huce.edu.vn</h3>
                        <h3>Address: Số 30, ngách 168, đường Thụy Phương, tổ dân phố Liên Ngạc, quận Bắc Từ Liêm, Hà Nội</h3>
                    </div> 
                </div>
                
            </div>
            <div className={second_box}>
                    <div className={top_boxes}>
                        <div className={suppost_box}>
                            <h2>CUSTOMER SUPPORT</h2>
                            {dataSuppost.map((item)=>{
                                return  <Menu key={item.id} content={item.content} href={item.href}/>
                            })}
                        </div>
                        <div className={policy_box}>
                            <h2>POLICY</h2>
                            {dataPolicy.map((item)=>{
                                return  <Menu key={item.id} content={item.content} href={item.href}/>
                            })}
                        </div>
                    </div>
                    <div className={img_box}>
                        <img src={Payment}/>
                    </div>
                    
            </div>
            
        </div>
     );
}

export default MyFooter;