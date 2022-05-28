import './Slide.scss';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import Bg1 from '../../assets/home-img-1.png';
import Bg2 from '../../assets/home-img-2.png';
import Bg3 from '../../assets/home-img-3.png';

import { useState } from 'react';

export default function Slide() {
    const Bg = [Bg1, Bg2, Bg3];
    const [slideImg, setSlideImg] = useState(0);
    return (
        <section className='slide'>
            <div className='slide-container'>
                <div className='slide-content'>
                    <p>fresh and organic</p>
                    <h3>upto 50% off</h3>
                    <button>Shop Now</button>
                </div>
                <img src={Bg[slideImg]} alt='青椒' />
            </div>

            <div className='slide-icons'>
                <AiOutlineLeft className="icon" />
                <AiOutlineRight className="icon" />
            </div>
        </section>
    )
}