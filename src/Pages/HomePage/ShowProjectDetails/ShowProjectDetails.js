import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ShowProjectDetails = () => {
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/myprojects/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            you vave clicked {id}
        </div>
    );
};

export default ShowProjectDetails;