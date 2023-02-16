import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ku from "../assets/ku.jpg";
import bstm from "../assets/bstm.jpeg";

const Education = () => {
    const gotoKU = () => {
        window.location.href = "https://klyuniv.ac.in/";
    }
    const gotoBSTM = () => {
        window.location.href = "https://bstmanagement.in/";
    }
    return (
        <div className='mt-5'>
            <h3 className='text-center mt-3 mb-3 text-primary aboutHeading'>EDUCATION <SchoolIcon /></h3>
            <div className="row">
                <div className="col-sm">
                    <Card sx={{ maxWidth: 345, height: 350 }} className="m-auto mt-2 mb-2">
                        <CardMedia
                            component="img"
                            alt="university of kalyani"
                            height="150"
                            image={ku}
                        />
                        <CardContent sx={{ height: 150 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Master of Computer Application
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                University of Kalyani
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Department of Computer Science and Engineering
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color='error' onClick={gotoKU}>Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="col-sm">
                    <Card sx={{ maxWidth: 345, height: 350 }} className="m-auto mt-2 mb-2">
                        <CardMedia
                            component="img"
                            alt="bstm"
                            height="150"
                            image={bstm}
                        />
                        <CardContent sx={{ height: 150 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Bachelor of Computer Application
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Bengal School of Technology and Management
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                MAKAUT (Formerly WBUT)
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color='error' onClick={gotoBSTM}>Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Education