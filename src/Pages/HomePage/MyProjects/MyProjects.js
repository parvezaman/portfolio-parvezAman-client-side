import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('myProjects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])
    return (
        <div className="text-center mb-5">
            {
                projects.map(project => <Card key={project.id} style={{ width: '100%' }}>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>
                   {project.description}
                   <p><a target="_blank" href={project.liveLink}>Live Link</a></p>
                   <p><a target="_blank" href={project.gitClient}>GitHub Client</a></p>
                   <p><a target="_blank" href={project.gitServer}>GitHub Server</a></p>
                  </Card.Text>
                  <Button variant="primary">See Details</Button>
                </Card.Body>
              </Card>)
            }
        </div>
    );
};

export default MyProjects;