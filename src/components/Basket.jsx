import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Basket() {
    const { cart, removeFromCart  } = useContext(GlobalContext);

    return (
        <div>
            <h1>Your Cart</h1>

            {(!cart || cart.length === 0) ? (
                <p>Your cart is empty.</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 400px)', justifyContent: 'center', marginTop: '40px', marginLeft: '68px' }}>
                    {cart.map((product) => (
                        <Card key={product.id} style={{ width: '18rem', marginBottom: '20px' }}>
                            <Card.Img variant="top" src={product.img} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>{product.text}</Card.Title>
                                <Card.Text>
                                    {product.price}
                                </Card.Text>
                                <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Basket;
