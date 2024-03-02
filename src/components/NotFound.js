import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className=" ml-5 mr-5 text-center display-4 my-5">404 Error Not Found</div>
            <div className="container-fluid">
                <Link to="/">
                    <button className="container-fluid btn btn-success my-5 py-5" >
                        Back To HomePage
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;