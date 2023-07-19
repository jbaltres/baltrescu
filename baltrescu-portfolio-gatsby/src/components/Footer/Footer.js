import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FooterContainer, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

export function Footer() {
  return (
    <FooterContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/">
                    <SocialIcon />
                    Baltrescu
                </SocialLogo>
                <WebsiteRights>Baltrescu © {new Date().getFullYear()}</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook" rel="noopener noreffer">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreffer">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube" rel="noopener noreffer">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="LinkedIn" rel="noopener noreffer">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer