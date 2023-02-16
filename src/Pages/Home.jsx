import React from 'react';
import Profile from "../assets/Profile.jpeg";
import Paper from '@mui/material/Paper';
import { AiFillHeart } from "react-icons/ai";
import Technologies from '../Components/Technologies';
import Resume from '../Components/Resume';

const Home = () => {
    return (
        <div className='home-page'>
            <div className="container mt-2">
                <div className='row'>
                    <div className="col-lg pt-3 pb-3">
                        <h2 className='text-center'>Hi, I am <span style={{ color: "#1976d2" }}>SayanDip</span> Adhikary</h2>
                        <p className='text-center'>Master of Computer Application Graduate</p>
                        <div className='shadow clippy'>
                            <h4 className='text-center'>Passionate<br /> To Craft Amazing <br />Digital Products.</h4>
                        </div>
                        <p className='text-center mt-2'>An design enthusiast that already have web designing experience. In addition to web design, I have a strong understanding of C/C++, Data Structure and DBMS.</p>
                    </div>
                    <div className="col-lg pt-3 pb-3">
                        <Paper elevation={5} className="paper"><img src={Profile} alt="Profile" className='profileImage' /></Paper>
                    </div>
                </div>
                <h1 className='text-center mt-4'>I <span className='text-danger'>LOVE</span> TO CREATE SOMETHING SIMPLE AND CLEAN <AiFillHeart className='text-danger' /></h1>
                <Resume />
                <Technologies />
            </div>
        </div>
    )
}

export default Home