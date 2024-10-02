import { actGetCategories } from "@store/categoriesSlice/act/actGetCategories";
import { useAppDispatch, useAppSelector } from "@store/hooks.ts";
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.categories);

  const categoriesList = records.map((item, idx) => (
    <Col key={item.id}>
      <Card style={{ width: "18rem", margin: "1rem", cursor: "pointer" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title className="text-center">{item.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  ));

  useEffect(() => {
    dispatch(actGetCategories());
  }, []);

  return (
    <Container style={{ padding: "2rem" }}>
      <Row md={4}>{categoriesList}</Row>
    </Container>
  );
};

export default Categories;
