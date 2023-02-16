import { Button } from '@mui/material';
import React from 'react';
import Resume from './Resume';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import LockResetIcon from '@mui/icons-material/LockReset';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { mailMe } from '../Pages/Contact';

const Footer = () => {
    const gotoVrppc = () => {
        window.location.href = "https://github.com/Sayandip0408/VRPPC";
    }
    const gotoAmazkart = () => {
        window.location.href = "https://breakable-blue-poncho.cyclic.app/";
    }
    const gotoLockey = () => {
        window.location.href = "https://plain-pinafore-worm.cyclic.app/";
    }
    const gotoTictactoe = () => {
        window.location.href = "https://tictactoe-sayandip.netlify.app/";
    }
    const gotoFacebook = () => {
        window.location.href = "https://www.facebook.com/sayandip.adhikary.96";
    }
    const gotoInsta = () => {
        window.location.href = "https://www.instagram.com/sayan.dip7/";
    }
    const gotoGithub = () => {
        window.location.href = "https://github.com/Sayandip0408";
    }
    const gotoLinkedin = () => {
        window.location.href = "https://www.linkedin.com/in/sayandip-adhikary-7359a8199/";
    }

    return (
        <footer className='mt-2 border-top bg-black'>
            <div className='container'>
                <div className="row pt-2 pb-2">
                    <div className="col-md text-center mt-3 mb-3">
                        <h5 className='text-center text-light'>Developed and maintained by SayanDip</h5>
                        <Resume />
                        <Button className='w-75 mt-1 mb-1' variant='outlined' color='error' endIcon={<MarkEmailReadIcon />} onClick={mailMe}>Contact</Button>
                    </div>
                    <div className="col-md text-center mt-3 mb-3">
                        <h5 className='text-center text-light'>My Projects</h5>
                        <Button className='w-75 mt-1 mb-1' variant='outlined' color='secondary' endIcon={<DirectionsBusFilledIcon />} onClick={gotoVrppc}>VRPPC</Button>
                        <Button className='w-75 mt-1 mb-1' variant='outlined' color='secondary' endIcon={<ShoppingCartIcon />} onClick={gotoAmazkart}>AmazKart</Button>
                        <Button className='w-75 mt-1 mb-1' variant='outlined' color='secondary' endIcon={<LockResetIcon />} onClick={gotoLockey}>Locke & Key</Button>
                        <Button className='w-75 mt-1 mb-1' variant='outlined' color='secondary' endIcon={<VideogameAssetIcon />} onClick={gotoTictactoe}>Tic Tac Toe</Button>
                    </div>
                    <div className="col-md text-center mt-3 mb-3">
                        <h5 className='text-center text-light'>Social</h5>
                        <Button className='w-75 mt-1 mb-1' variant='outlined' color='primary' endIcon={<InstagramIcon />} onClick={gotoInsta}>Instagram</Button>
                        <Button className='w-75 mt-1 mb-1' variant='outlined' color='primary' endIcon={<GitHubIcon />} onClick={gotoGithub}>GitHub</Button>
                        <Button className='w-75 mt-1 mb-1' variant='outlined' color='primary' endIcon={<FacebookIcon />} onClick={gotoFacebook}>Facebook</Button>
                        <Button className='w-75 mt-1 mb-1' variant='outlined' color='primary' endIcon={<LinkedInIcon />} onClick={gotoLinkedin}>LinkedIn</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer