import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white pt-5 pb-4">
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left">
                        <div className="col-12 col-md-4 col-lg-4 col-xl-4 mx-auto mt-3 text-start">

                            {/* ---------Footer brand----------- */}
                            <div className="mb-4">
                                <a href="/" className="text-uppercase mb-4 text-decoration-none text-white"><h1>CarPoint</h1></a>
                            </div>
                            <p className="footer-p-font">Located in USA since 1983, Car Point provides outstanding customer
                                service. We believe that our
                                customers deserve the top vision care, so that's what we focus on.</p>
                        </div>

                        {/* ---------Education section-------- */}

                        <div className="col-6 col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-md-start text-lg-start">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-white">Education</h5>
                            <p>
                                <a className="footer-p-font font-hover text-decoration-none text-white"
                                    href="/">How to order?</a>
                            </p>
                            <p>
                                <a className="footer-p-font font-hover text-decoration-none text-white"
                                    href="/">How to ready for travel</a>
                            </p>

                            <p>
                                <a className="footer-p-font font-hover text-decoration-none text-white"
                                    href="image/Measure_Your_PD.pdf" target="_blank">Health issue</a>
                            </p>
                            <p>
                                <a className="footer-p-font font-hover text-decoration-none text-white"
                                    href="/">Our packages</a>
                            </p>
                        </div>


                        {/* ---------About section------------ */}

                        <div className="col-6 col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-md-start text-lg-start">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-white">About</h5>
                            <p>
                                <a className="footer-p-font font-hover text-decoration-none text-white" href="/">Contact us</a>
                            </p>
                            <p>
                                <a className="footer-p-font font-hover text-decoration-none text-white" href="/">Our story</a>
                            </p>
                            <p>
                                <a className="footer-p-font font-hover text-decoration-none text-white"
                                    href="/">Faq</a>
                            </p>
                            <p>
                                <a className="footer-p-font font-hover text-decoration-none text-white"
                                    href="/">All Brands</a>
                            </p>
                        </div>

                        {/* ----------Contact section--------- */}

                        <div className="col-12 col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-md-start text-lg-start">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-white">Contact</h5>
                            <div className="location">
                                <p className=" footer-p-font">Car Point 3200 Red Lion Rd., Philadelphia, PA 19114</p>
                                <p className=" footer-p-font">+215-632-7378</p>
                                <p className=" footer-p-font">support@carpoint.com</p>
                            </div>
                            <img src="image/payment/payments.png" alt="" className="img-fluid bg-white w-100" />
                        </div>
                    </div>
                    <hr />

                    {/* -----------Copyright section--------- */}

                    <div className="row align-items-center teye-footer-bottom">
                        <div className="col-md-4 col-lg-4 text-start">
                            <p className="footer-bottom-font">Copyright 2021 | powered by: <a
                                href="/" target="_blank"><strong
                                    className="footer-heading font-hover text-decoration-none text-white">Car Point</strong></a></p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6 text-lg-end footer-privecy">
                            <a className="footer-bottom-font font-hover text-decoration-none text-white me-3"
                                href="/"> Privacy</a>
                            <a className="footer-bottom-font font-hover text-decoration-none text-white me-3"
                                href="/"> Terms of Use</a>
                            <a className="footer-bottom-font font-hover text-decoration-none text-white me-3"
                                href="/"> Accessibility</a>
                            <a className="footer-bottom-font font-hover text-decoration-none text-white me-3"
                                href="/"> CA Transparency Act</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;