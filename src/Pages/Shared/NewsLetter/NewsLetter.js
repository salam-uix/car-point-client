import React from 'react';
import { Container } from 'react-bootstrap';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <>
            <Container className="text-center bg-light super-container">
                <h4 className="mb-5">Subscribe for new updates</h4>
                <div className="subscribe-container">
                    <input className="inputfield" type="email" placeholder="Your email"></input>
                    <input className="submitfield" type="submit" value="subscribe" />
                </div>
            </Container>
        </>
    );
};

export default NewsLetter;