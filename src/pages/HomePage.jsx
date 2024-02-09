import ProductCarouselComponent from '../components/ProductCarouselComponent';
import CategoryCartComponent from '../components/CategoryCartComponent';
import { Row, Container } from 'react-bootstrap';

const HomePage = () => {

  const categories = [
    'Laptop',
    'Mobiles',
    'Television',
    'Monitors',
    'Printers',
    'Keyboards',
    'Toys',
    'Books',
    'Cameras'
  ]

  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5" >
          {
          categories.map((category, index) => <CategoryCartComponent key={index} category={category} index={index} />)
          }
        </Row>
      </Container>
    </>
  );
}

export default HomePage;