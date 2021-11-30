import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SiFirebase } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { FaDigitalTachograph } from 'react-icons/fa';

const ShowProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [imgLink, setImgLink] = useState([]);
    
    useEffect(() => {
        async function fetchMyApi() {
            let res = await fetch(`https://cryptic-reaches-07037.herokuapp.com/myprojects/${id}`)
            res = await res.json()
            setProject(res)
            setImgLink(res.images)
        }
        fetchMyApi()
    }, [])
    const { name, description, images, gitClient, liveLink, gitServer, usedTech } = project;
    
    return (
        <div>
            <h1 className="text-center">You are seeing Details of <span className="text-danger">{name}</span> Project</h1>
            <div className="d-lg-flex flex-column justify-content-center align-items-center">
                <h3><u>Some Screenshots of the project At First</u></h3>
                {
                    imgLink.map(image => <figure>
                        <img className="img-fluid border border-dark border-3 mb-3 w-75 d-block ms-auto me-auto" src={image.link} alt="" />
                        <figcaption className="text-center h6 fw-bold border border-3 border-info">{image.caption}</figcaption>
                    </figure>)
                }
            </div>
            <div className="mt-5">
                <h3 className="text-center"><u>Project Description</u></h3>
                <p className="text-center">{description}</p>
                <h3 className="text-center"><u>Used Technology</u></h3>
                <p className="text-center">{usedTech}</p>
            </div>
            <div className="mb-5">
                <h3 className="text-center"><u>Necessary Links</u></h3>
                <p className="h3 text-center">
                    <a className="p-1" title="Live-site-link" target="_blank" href={liveLink}><SiFirebase /></a>
                    <a className="p-1" title="gitHub-client-side-codes" target="_blank" href={gitClient}><AiFillGithub /></a>
                    {project.gitServer && <a className="p-1" title="gitHub-server-side-codes" target="_blank" href={gitServer}><FaDigitalTachograph /></a>}
                </p>
            </div>
        </div>
    );
};

export default ShowProjectDetails;