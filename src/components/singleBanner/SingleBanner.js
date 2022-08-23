import ToShopBtn from '../button/ToShopBtn';
import './SingleBanner.styles.scss';

export default function SingleBanner({ url }) {
    return (
        <div className='single-banner'>
            <div className='banner-content'>
                <span>limited sales</span>
                <h3>upto 50% off</h3>
                <ToShopBtn btnSize='btn' />
            </div>
            <div className='banner-img'>
                <img src={url} alt='products' />
            </div>
        </div>
    )
}