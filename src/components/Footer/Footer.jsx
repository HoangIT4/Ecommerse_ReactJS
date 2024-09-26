import { dataMenu } from './constant';
import styles from './styles.module.scss';
import WhiteLogo from '@icons/images/White-logo.svg';



function MyFooter() {
    const {container,boxNav} = styles

    return ( 
        <div className ={container}>
            <div> 
                <img src={WhiteLogo}
                    alt="Logo" 
                    style = {{
                        width: '153px',
                        height: '60px'
                    }}
                />
            </div>
            <div className={boxNav} >
                {dataMenu.map((item)=>(
                    <div>{item.content}</div>
                ))}
            </div>
            <div>
                <h3>Phone: 0968 367 560</h3>
                <h3>Email: hoang0191266@huce.edu.vn</h3>
                <h3>Address: Số 30, ngách 168, đường Thụy Phương, tổ dân phố Liên Ngạc, quận Bắc Từ Liêm, Hà Nội</h3>
            </div>
           
        </div>
     );
}

export default MyFooter;