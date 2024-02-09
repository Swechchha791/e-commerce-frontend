import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating';
import { LinkContainer } from 'react-router-bootstrap';

const ProductForListComponent = ({ images, idx }) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row>
        <Col lg={5}>
          <Card.Img variant="top" src={"/images/product-list/" +images[idx]+".jpg"} alt="Product_list_image" />
        </Col>
        {/* src={"/images/product-list" + images[idx] + "-category.jpg"} */}
        <Col lg={7}>
          <Card.Body>
            <Card.Title>
              Product Name Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Title>
            <Card.Text>
              Product Description Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content
            </Card.Text>
            <Card.Text>
              <Rating readonly size={28} initialValue={5} />
            </Card.Text>
            <Card.Text className="h4">
              $123{" "}
              <LinkContainer to='/product-details'>
                <Button variant="danger">See Product</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
