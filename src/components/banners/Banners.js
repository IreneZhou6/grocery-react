import './Banners.styles.scss';

import SingleBanner from '../singleBanner/SingleBanner';

import BannerImg1 from '../../assets/banner-1.jpg';
import BannerImg2 from '../../assets/banner-2.jpg';
import BannerImg3 from '../../assets/banner-3.jpg';

export default function Banners() {

    return (
        <section className='banners'>
            <SingleBanner url={BannerImg1} />
            <SingleBanner url={BannerImg2} />
            <SingleBanner url={BannerImg3} />
        </section>
    )
}