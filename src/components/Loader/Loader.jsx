import React from 'react';
import LoaderSpinner from "react-loader-spinner";

const Loader = ({ keyProp, height, width, color, className, type }) => {
    return (
        <LoaderSpinner
            key={ keyProp }
            className={className}
            type={type}
            color={color}
            height={ height }
            width={ width }/>
    );
};

export default Loader;
