// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Cards({name,desc,btn}) {
//   return (
//     <>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx3alT2PZ5A1S8J4lZ8Yj4EaxquK4QiVy3g&s" />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>
//           {desc}
//         </Card.Text>
//         <Button variant="primary">{btn}</Button>
//       </Card.Body>
//     </Card>
//     <br/>
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="https://www.bloomsburyflowers.co.uk/cdn/shop/files/image_4720_1.webp?v=1741332625&width=3840" />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>
//           {desc}
//         </Card.Text>
//         <Button variant="primary">{btn}</Button>
//       </Card.Body>
//     </Card>
//     <br />
//      <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/Beautiful-Flowers.jpg.webp" />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>
//           {desc}
//         </Card.Text>
//         <Button variant="primary">{btn}</Button>
//       </Card.Body>
//     </Card>
//     <br />
//    <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCnjtYHR-JqDzR0UHJduZ_pHI9LveRmtYug&s" />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>
//           {desc}
//         </Card.Text>
//         <Button variant="primary">{btn}</Button>
//       </Card.Body>
//     </Card>
  
//     </>
//   );
// }

// export default Cards;
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ name, desc, btn }) {
  return (
    <Container className="mt-4">
      <Row className="g-4"> {/* g-4 adds spacing between cards */}

        <Col xs={12} md={6}>
          <Card>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjx3alT2PZ5A1S8J4lZ8Yj4EaxquK4QiVy3g&s"
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Button variant="primary">{btn}</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.bloomsburyflowers.co.uk/cdn/shop/files/image_4720_1.webp?v=1741332625&width=3840"
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Button variant="primary">{btn}</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/Beautiful-Flowers.jpg.webp"
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Button variant="primary">{btn}</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card>
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCnjtYHR-JqDzR0UHJduZ_pHI9LveRmtYug&s"
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{desc}</Card.Text>
              <Button variant="primary">{btn}</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Cards;