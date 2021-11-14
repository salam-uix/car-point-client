import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="bg-dark text-white pt-5 pb-4">
                <div class="container text-center text-md-left">
                    <div class="row text-center text-md-left">
                        <div class="col-12 col-md-4 col-lg-4 col-xl-4 mx-auto mt-3 text-start">

                            {/* ---------Footer brand----------- */}
                            <div class="mb-4">
                                <a href="/" class="text-uppercase mb-4 text-decoration-none text-white"><h1>CarPoint</h1></a>
                            </div>
                            <p class="footer-p-font">Located in USA since 1983, Car Point provides outstanding customer
                                service. We believe that our
                                customers deserve the top vision care, so that's what we focus on.</p>
                        </div>

                        {/* ---------Education section-------- */}

                        <div class="col-6 col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-md-start text-lg-start">
                            <h5 class="text-uppercase mb-4 font-weight-bold text-white">Education</h5>
                            <p>
                                <a class="footer-p-font font-hover text-decoration-none text-white"
                                    href="/">How to order?</a>
                            </p>
                            <p>
                                <a class="footer-p-font font-hover text-decoration-none text-white"
                                    href="/">How to ready for travel</a>
                            </p>

                            <p>
                                <a class="footer-p-font font-hover text-decoration-none text-white"
                                    href="image/Measure_Your_PD.pdf" target="_blank">Health issue</a>
                            </p>
                            <p>
                                <a class="footer-p-font font-hover text-decoration-none text-white"
                                    href="/">Our packages</a>
                            </p>
                        </div>


                        {/* ---------About section------------ */}

                        <div class="col-6 col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-md-start text-lg-start">
                            <h5 class="text-uppercase mb-4 font-weight-bold text-white">About</h5>
                            <p>
                                <a class="footer-p-font font-hover text-decoration-none text-white" href="/">Contact us</a>
                            </p>
                            <p>
                                <a class="footer-p-font font-hover text-decoration-none text-white" href="/">Our story</a>
                            </p>
                            <p>
                                <a class="footer-p-font font-hover text-decoration-none text-white"
                                    href="/">Faq</a>
                            </p>
                            <p>
                                <a class="footer-p-font font-hover text-decoration-none text-white"
                                    href="/">All Brands</a>
                            </p>
                        </div>

                        {/* ----------Contact section--------- */}

                        <div class="col-12 col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-md-start text-lg-start">
                            <h5 class="text-uppercase mb-4 font-weight-bold text-white">Contact</h5>
                            <div class="location">
                                <p class=" footer-p-font">Car Point 3200 Red Lion Rd., Philadelphia, PA 19114</p>
                                <p class=" footer-p-font">+215-632-7378</p>
                                <p class=" footer-p-font">support@carpoint.com</p>
                            </div>
                            <img src="image/payment/payments.png" alt="" class="img-fluid bg-white w-100" />
                        </div>
                    </div>
                    <hr />

                    {/* -----------Copyright section--------- */}

                    <div class="row align-items-center teye-footer-bottom">
                        <div class="col-md-4 col-lg-4 text-start">
                            <p class="footer-bottom-font">Copyright 2021 | powered by: <a
                                href="/" target="_blank"><strong
                                    class="footer-heading font-hover text-decoration-none text-white">Car Point</strong></a></p>
                        </div>

                        {/* Footer bottom social icon */}

                        {/* <div class="col-12 col-md-2 col-lg-2">
                            <div class="text-end">
                                <div class="footer-social">
                                    <a class="me-3 footer-bottom-social-icon" href="/"><i class="fab fa-facebook"></i></a>
                                    <a class="me-3 footer-bottom-social-icon" href="/"><i class="fab fa-twitter fa-2x"></i></a>
                                    <a class="me-3 footer-bottom-social-icon" href="/"><i
                                        class="fab fa-instagram fa-2x"></i></a>
                                </div>
                            </div>
                        </div> */}

                        {/* Footer bottom privecy section */}

                        <div class="col-12 col-md-6 col-lg-6 text-lg-end footer-privecy">
                            <a class="footer-bottom-font font-hover text-decoration-none text-white me-3"
                                href="/"> Privacy</a>
                            <a class="footer-bottom-font font-hover text-decoration-none text-white me-3"
                                href="/"> Terms of Use</a>
                            <a class="footer-bottom-font font-hover text-decoration-none text-white me-3"
                                href="/"> Accessibility</a>
                            <a class="footer-bottom-font font-hover text-decoration-none text-white me-3"
                                href="/"> CA Transparency Act</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;