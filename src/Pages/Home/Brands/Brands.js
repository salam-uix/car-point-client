import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Brands = () => {
    return (
        <Container className="my-5">
            <h4 className="text-center mb-5">Our Top Brands</h4>
            <Row>
                <Col>
                    <img className="img-fluid w-50"
                        src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/46/buy-cars-toyota.png"
                        alt=""
                    />
                </Col>
                <Col>
                    <img className="img-fluid w-50"
                        src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/240/buy-cars-nissan.png"
                        alt=""
                    />
                </Col>
                <Col>
                    <img className="img-fluid w-50"
                        src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/241/buy-cars-honda.png"
                        alt=""
                    />
                </Col>
                <Col>
                    <img className="img-fluid w-50"
                        src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/28/buy-cars-lexus.png"
                        alt=""
                    />
                </Col>
                <Col>
                    <img className="img-fluid w-50"
                        src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/19/buy-cars-hyundai.png"
                        alt=""
                    />
                </Col>
                <Col>
                    <img className="img-fluid w-50"
                        src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/346/buy-cars-mercedes-benz.png"
                        alt=""
                    />
                </Col>
                <Col>
                    <img className="img-fluid w-50"
                        src="https://garirbazar.s3.amazonaws.com/uploads/brand/icon/32/buy-cars-mitsubishi.png"
                        alt=""
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default Brands;