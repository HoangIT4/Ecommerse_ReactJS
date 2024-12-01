import TheSteps from '@pages/CartDetail/component/Steps/THeSteps'
import Contents from '@pages/CartDetail/component/Contents/Contents'
import styles from  './styles.module.scss'
import MainLayout from '@components/Layout/Layout';

function CartDetail() {
    const { container ,content_space} = styles;
    return (
        <div className={container}>
            <TheSteps/>
            <div className={content_space}>
                <MainLayout>
                    <Contents/>
                </MainLayout>
            </div>
        </div>
      );
}

export default CartDetail;