import React from 'react';

const year = () => {
    return new Date().getFullYear()
}

const Footer = () => {
    return (
        <p className="footer">&copy;{year()} JEAN-FRANCOIS SEBAGH</p>
    )
}

export default Footer;