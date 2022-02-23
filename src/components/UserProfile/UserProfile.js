import * as React from 'react';
import Navbar from "../Navbar/Navbar";

export default function UserProfile() {
    try {
        JSON.parse(localStorage.getItem("email"));
    }catch (err) {
        console.log('Error: ', err.message);
        window.location.assign("/login#redirect");
    }
    let userEmail = JSON.parse(localStorage.getItem("email"));
    let userType = JSON.parse(localStorage.getItem("type"));
    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Hi {userEmail}, you are a {userType}</h2>
            </div>
        </div>
    );


}