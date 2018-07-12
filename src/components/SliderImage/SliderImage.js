import React from 'react';

const SliderImage = (props) => {
    return (
        <div className='hero-image darken-overlay'
             style={{
                 backgroundImage: 'url(' + props.imgURL + ')',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center center',
                 backgroundRepeat: 'no-repeat',
             }}
        >
            {props.content}
        </div>
    )
};

export default SliderImage;