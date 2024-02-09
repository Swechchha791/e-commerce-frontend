import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryCardComponent = ({ category, index }) => {
    const images = [
        '/images/product-list/laptop.jpg',
        '/images/product-list/mobile.jpg',
        '/images/product-list/television.jpg',
        '/images/product-list/monitor.jpg',
        '/images/product-list/printer.jpg',
        '/images/product-list/keyboard.jpg',
        '/images/product-list/toys.jpg',
        '/images/product-list/books.jpg',
        '/images/product-list/camera.jpg'
    ]
    return (
        <Card style={{width: '400px', margin: 'auto', marginTop: '10px'}}>
            <Card.Img variant="top" src={images[index]} style={{ height: '250px' }} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <LinkContainer to="/product-list">
                    <Button variant="success">Go to category</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    );
}

export default CategoryCardComponent;