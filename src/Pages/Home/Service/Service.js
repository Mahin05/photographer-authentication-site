import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        // <div className='service'>
        //     <img src={img} alt="" />
        //     <h4>{name}</h4>
        //     <h3>${price}</h3>
        //     <p>{description}</p>
        //     <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        // </div>
        <Card className='container service' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button  onClick={()=>navigateToServiceDetail(id)} variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;