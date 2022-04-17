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
        <Card className='container service' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h4>${price}</h4>
                <Card.Text>{description}</Card.Text>
                <Button className='service-btn-style'  onClick={()=>navigateToServiceDetail(id)}>Book Now</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;