import './Slide.styles.scss';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import Bg1 from '../../assets/home-img-1.png';
import Bg2 from '../../assets/home-img-2.png';
import Bg3 from '../../assets/home-img-3.png';

import { useState } from 'react';

export default function Slide() {
    const Bg = [Bg1, Bg2, Bg3];

    const [slideIndex, setSlideIndex] = useState(0);

    function prevIndex() {
        if (slideIndex <= 0) {
            setSlideIndex(Bg.length - 1);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    }

    function nextIndex() {
        if (slideIndex >= Bg.length - 1) {
            setSlideIndex(0);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    }

    return (
        <section className='slide'>
            <div className='slide-container'>
                <div className='slide-content'>
                    <p>fresh and organic</p>
                    <h3>upto 50% off</h3>
                    <button className='btn'>Shop Now</button>
                </div>
                <img src={Bg[slideIndex]} alt='vegetables' />
            </div>

            <div className='slide-icons'>
                <AiOutlineLeft className="icon" onClick={prevIndex} />
                <AiOutlineRight className="icon" onClick={nextIndex} />
            </div>
        </section>
    )
}