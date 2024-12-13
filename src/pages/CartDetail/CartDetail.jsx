import TheSteps from '@pages/CartDetail/component/Steps/THeSteps'
import Contents from '@pages/CartDetail/component/Contents/Contents'
import styles from  './styles.module.scss'
import MainLayout from '@components/Layout/Layout';
import { useState} from 'react';

function CartDetail() {
    const { container ,content_space} = styles;
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 2)); // 2 là số bước cuối cùng
      };
    
      const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0)); // 0 là bước đầu tiên
      };
    return (
        <div className={container}>
            <TheSteps currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} />
            <div className={content_space}>
                <MainLayout>
                    <Contents currentStep={currentStep} nextStep={nextStep} />
                </MainLayout>
            </div>
        </div>
      );
}

export default CartDetail;