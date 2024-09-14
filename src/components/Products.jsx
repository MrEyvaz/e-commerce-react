import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { GlobalContext } from '../GlobalContext/GlobalContext';

function Products() {
    const { Phones, addToCart } = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/basket'); 
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 400px)', justifyContent: 'center', marginTop: '40px', marginLeft: '68px' }}>
            {Phones.map((product, index) => (
                <Card key={product.id} style={{ width: '18rem', marginBottom: index < 3 ? '63px' : '0px' }}>
                    <Card.Img variant="top" src={product.img} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
                    <Card.Body>
                        <Card.Title>{product.text}</Card.Title>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                        <Button variant="primary" onClick={() => handleAddToCart(product)}>
                            Add to Cart
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Products;
