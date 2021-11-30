import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { SiFirebase } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { FaDigitalTachograph } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myprojects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const history = useHistory()
    const handleDetails=(id)=>{
        const url = `project/${id}`
        history.push(url);
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center mb-3 bd-highlight">
            {
                projects.map(project => <Card key={project._id} style={{ width: '75%' }}>
                    <Card.Img variant="top" src={project.image} />
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>
                            {project.description}
                            <p className="h5">
                                <a className="p-1" title="live-site-link" target="_blank" href={project.liveLink}><SiFirebase /></a>
                                <a className="p-1" title="gitHub-client-side-codes" target="_blank" href={project.gitClient}><AiFillGithub /></a>
                                <a className="p-1" title="gitHub-server-side-codes" target="_blank" href={project.gitServer}><FaDigitalTachograph /></a>
                            </p>
                        </Card.Text>
                        <Button onClick={()=>handleDetails(project._id)} variant="primary">See Details</Button>
                    </Card.Body>
                </Card>)
            }
        </div>
    );
};

export default MyProjects;