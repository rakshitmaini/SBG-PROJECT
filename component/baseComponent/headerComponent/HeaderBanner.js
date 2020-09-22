import React from 'react'
import HeaderWrapper from './style.header';
const HeaderBanner = (props) => {
    return (
        <>
            <HeaderWrapper>
                <div className="header">

                    <img src={props.img} />

                    <div className="overlay"></div>
                    <div className="title">
                        <h3>A few words</h3>
                        <h1>{props.tag}</h1>
                    </div>
                </div>
            </HeaderWrapper>
        </>
    )
}

export default HeaderBanner
