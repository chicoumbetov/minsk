import React from 'react';
import Video from '../../video/video1.mp4';
import {
    HeroContainer,
    HeroBg, VideoBg,
    HeroContent, HeroH1,
    HeroP
} from './HeaderElements';

//1:15:00
const Header = () => {

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video1/mp4' />
            </HeroBg>

            <HeroContent>
                <HeroH1>Большой выбор комфортной обуви на любой случай</HeroH1>
                <HeroP>
                    В НАШЕМ ОНЛАЙН МАГАЗИНЕ
                </HeroP>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default Header;