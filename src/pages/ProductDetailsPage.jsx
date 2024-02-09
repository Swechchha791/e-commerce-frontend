import { Row, Col, Container } from "react-bootstrap"

const ProductDetailsPage = () => {
    return (
      <Container>
         <Row className="mt-5">
        <Col md={4}>
           images
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              Product name. price, description, rating
            </Col>
            <Col md={4}>
              Product status, quantity,
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h4>REVIEWS</h4>
            </Col>
          </Row>
          <hr/>
          Send Review Form.
        </Col>
      </Row>
      </Container>
    )
  }
  
  export default ProductDetailsPage