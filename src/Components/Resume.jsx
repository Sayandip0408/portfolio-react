import React from 'react';
import { Button } from '@mui/material';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import cv from "../assets/SayanDipCV4.pdf";

const Resume = () => {
    const downloadResume = () => {
        window.location.href = cv;
    }
    return (
        <div className='text-center p-4'>
            <Button variant='contained' endIcon={<DownloadForOfflineIcon />} color="error" onClick={downloadResume}>Download Resume</Button>
        </div>
    )
}

export default Resume;