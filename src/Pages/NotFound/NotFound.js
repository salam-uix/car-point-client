import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container-fluid text-center d-flex flex-column">
            <img className="img-fluid" src="https://i.ibb.co/NFbnxNJ/404.jpg" alt="" />
            <span>
                <Link style={{ backgroundColor: "#EE4F15", color: "white" }} className="btn" to="/">Go To Homepage</Link>
            </span>


        </div>
    );
};

export default NotFound;