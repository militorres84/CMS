import React from "react";
import './Notfound.scss';
import vectorup from '../../assets/notfound-image/vector53.png';
import vectorinside from '../../assets/notfound-image/vector54.png';

const Notfound = () => {
    return(
        <div id="Notfound-body">
            <div className="vector-notfound">
            
            <img src={vectorup} className="vector-above" alt="notfoundvector" />
            
            <div className="notfound-container">
                <div className="notfound-message">
                <h1 className="title-firts-error"> Oooops! </h1>
                <h1 className="title-error"> 404 Error </h1>
                <h2 className="sub-title-error"> Pages not found :( </h2>
                </div>
            </div>

            <img src={vectorinside} className="vector-below" alt="notfound vector" />
            </div>
        </div>
    )
}

export default Notfound;