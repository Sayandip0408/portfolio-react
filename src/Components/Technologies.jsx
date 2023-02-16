import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import reactPic from "../assets/react.svg";
import cpp from "../assets/cpp.png";
import html from "../assets/html.jpg";
import node from "../assets/node.png";
import python from "../assets/python.webp";
import nosql from "../assets/nosql.png";


const cardData = [
    {
        "heading": "React JS",
        "img": reactPic,
        "desc": "A JavaScript library for building user interfaces",
        "link": "https://reactjs.org/"
    },
    {
        "heading": "C/C++",
        "img": cpp,
        "desc": "Cross-platform programming language",
        "link": "https://www.geeksforgeeks.org/c-plus-plus/"
    },
    {
        "heading": "Python",
        "img": python,
        "desc": "Programming language that lets you integrate systems more effectively",
        "link": "https://www.python.org/"
    },
    {
        "heading": "HTML / CSS",
        "img": html,
        "desc": "Skeleton & Skin of a website",
        "link": "https://www.w3.org/standards/webdesign/htmlcss.html"
    },
    {
        "heading": "SQL-NoSQL",
        "img": nosql,
        "desc": "Relational (SQL) or Non-relational (NoSQL)",
        "link": "https://www.mongodb.com/docs/"
    },
    {
        "heading": "Node JS",
        "img": node,
        "desc": "Node.js is an open-source, cross-platform JavaScript runtime environment",
        "link": "https://nodejs.org/en/"
    }
]

const CardComp = (item) => {
    return (
        <div className="col-xl-4 col-md-6">
            <a href={item.link} style={{ textDecoration: "none" }}>
                <Card className="m-auto mt-2 mb-2 technologyCard">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={item.img}
                            alt="React JS"
                        />
                        <CardContent sx={{ height: "fit-content" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.heading}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </a>
        </div>
    )
}

const Technologies = () => {
    return (
        <div className='pt-3 pb-3 container'>
            <div className="row text-center">
                {cardData.map(CardComp)}
            </div>
        </div>
    )
}

export default Technologies