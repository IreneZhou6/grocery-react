import './SingleBanner.styles.scss';

export default function SingleBanner({ url }) {
    return (
        <div className='single-banner'>
            <div className='banner-content'></div>
            <div className='banner-img'>
                <img src={url} alt='products' />
            </div>
        </div>
    )
}