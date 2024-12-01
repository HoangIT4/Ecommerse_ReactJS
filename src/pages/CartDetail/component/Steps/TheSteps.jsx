import styles from '../../styles.module.scss'
import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';

const steps = [
    {
      title: 'SHOPPING CART',
      content: 'First-content',
    },
    {
      title: 'CHECKOUT',
      content: 'Second-content',
    },
    {
      title: 'ORDER STATUS',
      content: 'Last-content',
    },
  ];
const TheSteps = () =>{
    const {containerSteps} = styles

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));
    const contentStyle = {
      lineHeight: '260px',
      textAlign: 'center',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
    };
    return ( 
        <div className={containerSteps}>
            <Steps className={styles.customSteps} current={current} items={items} style={{fontFamily: '"Roboto Mono", monospace'}}/>
            {/* <div style={contentStyle}>{steps[current].content}</div> */}
            <div
                style={{
                marginTop: 24,
                }}
            >
                {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                    Next
                </Button>
                )}
                {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                    Done
                </Button>
                )}
                {current > 0 && (
                <Button
                    style={{
                    margin: '0 8px',
                    }}
                    onClick={() => prev()}
                >
                    Previous
                </Button>
                )}
            </div>  
        </div>
     );
}

export default TheSteps;