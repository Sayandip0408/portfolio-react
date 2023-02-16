import { Button } from '@mui/material';
import React from 'react';
import opentowork from "../assets/opentowork.svg";

const mailMe = () => {
    window.location.href = "mailto:adhikarysayandip@gmail.com";
}

const Contact = () => {
    return (
        <div className='container contactPage'>
            <div className="row">
                <div className="col-md contactImgDiv">
                    <img src={opentowork} alt="open to work" className=' contact-img' />
                </div>
                <div className="col-md contactDiv">
                    <h4 className='text-primary aboutHeading'>I'm Open to Work</h4>
                    <h6>Would like to hear from you.</h6>
                    <Button variant='outlined' color='success' onClick={mailMe}>adhikarysayandip@gmail.com</Button>
                </div>
            </div>
        </div>
    )
}

export { Contact, mailMe };