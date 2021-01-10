import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FaFacebook, FaInstagram,
    FaYoutube, FaLinkedin, FaTelegram
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink, SocialMedia, SocialMediaWrap,
    SocialLogo, WebsiteRights,
    SocialIcon, SocialIconLink
} from './FooterElements';
import { BsChevronCompactUp } from "react-icons/bs";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
            
                    <div>
                    <SocialLogo to='/' onClick={toggleHome}>
                        <BsChevronCompactUp />
                    </SocialLogo>
                    </div>
                <FooterLinksContainer>
                    
                    
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>О нас</FooterLinkTitle>
                            <FooterLink to="/">
                                О нас
                            </FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Контакты</FooterLinkTitle>
                            <FooterLink to="/">
                                Контакты
                            </FooterLink>
                            <FooterLink to="/">
                                Поддержка
                            </FooterLink>

                            <FooterLink to="/">
                                Спонсорство
                            </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle>Социальные сети</FooterLinkTitle>
                            <FooterLink to="/">
                                Instagram
                            </FooterLink>
                            <FooterLink to="/">
                                Facebook
                            </FooterLink>
                            <FooterLink to="/">
                                Youtube
                            </FooterLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>

                        <WebsiteRights>ⓒ {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcon>
                            <SocialIconLink href="/" target="_blank"
                                area-labels="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                area-labels="Instagram">
                                <FaInstagram />

                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                area-labels="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                area-labels="Telegram">
                                <FaTelegram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                                area-labels="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
