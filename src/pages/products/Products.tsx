import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByCatPrefix } from "@store/productsSlice/act/actGetProductsByCatPrefix";
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const { cat_prefix } = useParams();

  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.products);

  const productsList = records?.map((product) => (
    <Col key={product.id}>
      <Card style={{ width: "18rem", margin: "1rem", cursor: "pointer" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price.toFixed(2)}</Card.Text>
          <Card.Text>you can add {product.max} items</Card.Text>
          <Button className="mt-2" variant="outline-info">
            add to cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  useEffect(() => {
    if (cat_prefix) {
      dispatch(actGetProductsByCatPrefix(cat_prefix));
    }
  }, []);

  return (
    <Container style={{ padding: "2rem" }}>
      <Row lg={3} md={2} xl={4}>
        {productsList}
      </Row>
    </Container>
  );
};

export default Products;
