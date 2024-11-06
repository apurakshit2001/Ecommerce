import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <div className='profilePage'>
            <div className="ProfileWrapper">
                <div className="profilePerson">
                    <div className="profileIMg"><img src="" alt="" /></div>
                    <p className="profileName">User ID</p>
                </div>
                <div className="profileContent">
                    <div className="profileContentCard">
                        <div className="cardLeft">
                            <i class='bx bx-package'></i>
                        </div>
                        <div className="cardRight">
                            <p className="cardTitle">Your Orders</p>
                            <p className="cardDescription">Track, return, or buy things again</p>
                        </div>
                    </div>
                    <div className="profileContentCard">
                        <div className="cardLeft">
                            <i class='bx bxs-lock'></i>
                        </div>
                        <div className="cardRight">
                            <p className="cardTitle">Login & security</p>
                            <p className="cardDescription">Edit login, name, and mobile number</p>
                        </div>
                    </div>
                    <div className="profileContentCard">
                        <div className="cardLeft">
                            <i class="fa-solid fa-address-book"></i>
                        </div>
                        <div className="cardRight">
                            <p className="cardTitle">Your Addresses</p>
                            <p className="cardDescription">Edit addresses for orders and gifts</p>
                        </div>
                    </div>
                    <div className="profileContentCard">
                        <div className="cardLeft">
                        <i class="fa-solid fa-credit-card"></i>
                        </div>
                        <div className="cardRight">
                            <p className="cardTitle">Payment options</p>
                            <p className="cardDescription">Edit or add payment methods</p>
                        </div>
                    </div>
                    <div className="profileContentCard">
                        <div className="cardLeft">
                        <i class="fa-solid fa-ticket"></i>
                        </div>
                        <div className="cardRight">
                            <p className="cardTitle">My Coupons</p>
                            <p className="cardDescription">Helps you save money</p>
                        </div>
                    </div>
                    <div className="profileContentCard">
                        <div className="cardLeft">
                        <i class="fa-solid fa-download"></i>
                        </div>
                        <div className="cardRight">
                            <p className="cardTitle">Download our App</p>
                            <p className="cardDescription">For easy access and user friendly mobile experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
