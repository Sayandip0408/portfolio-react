import React from 'react';
import TerminalIcon from '@mui/icons-material/Terminal';

const Skills = () => {
    return (
        <div className="mt-5">
            <h3 className='text-center mt-3 mb-3 text-primary aboutHeading'>SKILLS <TerminalIcon /></h3>
            <h6>C/C++</h6>
            <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "95%", backgroundColor: "#8e44ad", borderRadius: 6 }}>95%</div>
            </div>
            <h6>Python</h6>
            <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "85%", backgroundColor: "#2980b9", borderRadius: 6 }}>85%</div>
            </div>
            <h6>HTML</h6>
            <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "99%", backgroundColor: "#e67e22", borderRadius: 6 }}>99%</div>
            </div>
            <h6>CSS</h6>
            <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "90%", backgroundColor: "#5024d1", borderRadius: 6 }}>90%</div>
            </div>
            <h6>JavaScript</h6>
            <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "80%", backgroundColor: "#f1c40f", borderRadius: 6 }}>80%</div>
            </div>
            <h6>React JS</h6>
            <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "78%", backgroundColor: "#3498db", borderRadius: 6 }}>78%</div>
            </div>
            <h6>Node JS</h6>
            <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "70%", backgroundColor: "#6ca36b", borderRadius: 6 }}>70%</div>
            </div>
            <h6>SQL</h6>
            <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "85%", backgroundColor: "#2c3e50", borderRadius: 6 }}>85%</div>
            </div>
            <h6>MongoDB</h6>
            <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "90%", backgroundColor: "#00ed64", borderRadius: 6 }}>90%</div>
            </div>
            <h6>Data Structure</h6>
            <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "99%", backgroundColor: "#e74c3c", borderRadius: 6 }}>99%</div>
            </div>
            <h6>Object Oriented Programming</h6>
            <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "95%", backgroundColor: "#16a085", borderRadius: 6 }}>95%</div>
            </div>
        </div>
    )
}

export default Skills