import './SingleBanner.styles.scss';

export default function SingleBanner({ url }) {
    return (
        <div className='single-banner'>
            <div className='banner-content'>
                <span>limited sales</span>
                <h3>upto 50% off</h3>
                <button className='btn'>shop now</button>
            </div>
            <div className='banner-img'>
                <img src={url} alt='products' />
            </div>
        </div>
    )
}