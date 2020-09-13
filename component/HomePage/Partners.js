import React from 'react'
import PartnerWrapper from './styledComponent/style.partner'
// import Hdfc from './assetComponent/hdfc.jpg';
// import Aditya from './assetComponent/aditya-birla.jpg';
// import Metlife from './assetComponent/metlife.jpg';
// import National from './assetComponent/national.jpeg';
// import Star from './assetComponent/starhealth.jpg';
// import Tata from './assetComponent/tataaig.png';

export default function Partners() {
    const images = [
        {
            src: '/homeAssets/hdfc.jpg'
        },
        {
            src: '/homeAssets/aditya-birla.jpg'
        },
        {
            src: '/homeAssets/metlife.jpg'
        },
        {
            src: '/homeAssets/national.jpeg'
        },
        {
            src: '/homeAssets/starhealth.jpg'
        },
        {
            src: '/homeAssets/tataaig.png'
        }
    ];
    return (

        <PartnerWrapper>
            <div style={{ textAlign: 'center' }}>
                <span style={{ color: '#0e43a5', fontSize: '4rem' }}>
                    Our Partners
                </span>
            </div>
            <div className="slider-main">
                <div className="slider">
                    <div className="slide-track">
                        {images.map((img, i) => (
                            <div className="slide">
                                <img
                                    src={img.src} height="100" width="250" alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PartnerWrapper>

    )
}

