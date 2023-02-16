import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import vrppc from "../assets/vrppc.png";
import lockeKey from "../assets/lockeKey.png";
import amazkart from "../assets/amazkart.png";
import tictactoe from "../assets/tictactoe.png";
import quizbuzz from "../assets/quizbuzz.png";
import codepen from "../assets/codepen.png";


const projectData = [
    {
        "projectName": "AmazKart Ecommerce",
        "image": amazkart,
        "projectDesc": "AmazKart is a MERN stack ecommerce website, it has featurse like category wised products, cart system, order process, admin dashboard, add new product, update stocks etc.",
        "technologies": "React JS, Node JS, MongoDB, Express, HTML, CSS, JavaScript, Redux",
        "url": "https://breakable-blue-poncho.cyclic.app/"
    },
    {
        "projectName": "Locke & Key",
        "image": lockeKey,
        "projectDesc": "Locke & Key is a password manager MERN website to store new password securely, show all your saved passwords, also generates extremely strong passwords.",
        "technologies": "React JS, Node JS, MongoDB, Express, HTML, CSS, JavaScript",
        "url": "https://plain-pinafore-worm.cyclic.app/"
    },
    {
        "projectName": "Vehicle Routing Problem With Private Fleet And Common Carrier",
        "image": vrppc,
        "projectDesc": "The vehicle-routing problem with private fleet and common carrier (VRPPC) is a variant of the VRP in which customers can be subcontracted at a customer-dependent cost if the privately-owned capacity is insufficient to serve all customers, or if doing so is beneficial from a cost point of view.",
        "technologies": "C++",
        "url": "https://github.com/Sayandip0408/VRPPC"
    },
    {
        "projectName": "Tic Tac Toe",
        "image": tictactoe,
        "projectDesc": "Tic Tac Toe game is very famous among us, it doesn't need much explanation I guess.",
        "technologies": "React JS, HTML, CSS, JavaScript",
        "url": "https://tictactoe-sayandip.netlify.app/"
    },
    {
        "projectName": "Quiz-Buzz",
        "image": quizbuzz,
        "projectDesc": "A website to play MCQ quiz on subjects like C/C++, Database, Data Structure HTML/CSS, JavaScript, Python, Java etc.",
        "technologies": "React JS, HTML, CSS, JavaScript",
        "url": "https://quiz-buzz-sayandip.netlify.app/"
    },
    {
        "projectName": "Codepen Clone",
        "image": codepen,
        "projectDesc": "Hi! My name is SayanDip Adhikary, I have created this Codepen Clone Website using React JS.",
        "technologies": "React JS, HTML, CSS, JavaScript",
        "url": "https://codepen-by-sayandip.netlify.app/"
    },
]

const projectCard = (data) => {
    const goToUrl = () => {
        window.location.href = data.url;
    }
    return (
        <div className='col-xl-4 col-md-6'>
            <Card className="m-auto mt-2 mb-2 projectCard">
                <CardMedia
                    component="img"
                    alt="project image"
                    height="150"
                    image={data.image}
                />
                <CardContent sx={{ height: "fit-content" }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.projectName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.technologies}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.projectDesc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color='error' onClick={goToUrl}>Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}

const Project = () => {
    return (
        <div className='container pt-5 pb-3'>
            <h3 className='text-center text-primary projectPageHeading'>PROJECTS I'VE DONE SO FAR...</h3>
            <div className="row">
                {projectData.map(projectCard)}
            </div>
            <p className='text-center mt-5'><span className='text-danger'>***</span>find more interesting projects on my <a href='https://github.com/Sayandip0408' className='text-danger' style={{ textDecoration: "none" }}><b>GitHub repository</b></a></p>
        </div>
    )
}

export default Project