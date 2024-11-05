import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='heroSection'>
            <div className="overflow-hidden">
                <div className="container-fluid col-xxl-8">
                    <div className="row flex-lg-nowrap align-items-center g-5">
                        <div className="order-lg-1 w-100">
                            <img
                                style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%)' }}
                                src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&ixlib=rb-1.2.1&q=80&w=1080&h=768"
                                className="d-block mx-lg-auto img-fluid"
                                alt="Photo by Milad Fakurian"
                                loading="lazy"
                                srcSet="
                                    https://images.unsplash.com/photo-1618004912476-29818d81ae2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&ixlib=rb-1.2.1&q=80&w=1080&h=768 1080w,
                                    https://images.unsplash.com/photo-1618004912476-29818d81ae2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&ixlib=rb-1.2.1&q=80&w=768 768w,
                                    https://images.unsplash.com/photo-1618004912476-29818d81ae2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwzNzg0fDB8MXxzZWFyY2h8NzV8fHB1cnBsZXxlbnwwfDB8fHwxNjQ3NDcxNjY4&ixlib=rb-1.2.1&q=80&w=300 300w"
                                sizes="(max-width: 1080px) 100vw, 1080px"
                                width="1080"
                                height="768"
                            />
                        </div>
                        <div className="col-lg-6 col-xl-5 text-center text-lg-start pt-lg-5 mt-xl-4">
                        <div className="lc-block-panel">
                                <div className="panel-options">
                                    <a href="#" className="border">Today's Deal</a>
                                    <a href="#" className="border">Top Trends</a>
                                    <a href="#" className="border">Best Sellers</a>
                                    <a href="#" className="border">under 1K</a>
                                    <a href="#" className="border">Sell</a>
                                </div>
                            </div>
                            <div className="lc-block mb-4">
                                <div>
                                    <h1 className="fw-bold outline display-5">Welcome to <i className='bx bxs-package packageIcon'></i></h1> <h1 className="fw-bold  display-1">Polo India.</h1>
                                </div>
                            </div>

                            <div className="lc-block mb-5">
                                <div>
                                    <p className="rfs-8">You can shop on Polo India for millions of products with fast local
                                        delivery.</p>
                                    <p className="fw-bold">Business collaboration based on trust:</p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="lc-block col-3">
                                    <img className="img-fluid wp-image-975" src="https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/11/motorola.svg" alt="Motorola" />
                                </div>
                                <div className="lc-block col-3">
                                    <img className="img-fluid wp-image-977" src="https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/11/asus.svg" alt="Asus" />
                                </div>
                                <div className="lc-block col-3">
                                    <img className="img-fluid wp-image-974" src="https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/11/sony.svg" alt="Sony" />
                                </div>
                                <div className="lc-block col-3">
                                    <img className="img-fluid wp-image-967" src="https://lclibrary.b-cdn.net/starters/wp-content/uploads/sites/15/2021/11/samsung-282297.svg" alt="Samsung" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
