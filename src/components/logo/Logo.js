import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt shadow-2" options={{ max : 25}} style={{height: 150, width: 250, backgroundColor: "red"}}>
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: "5px", width: "100px"}} src={brain} alt="Brain icon"></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;