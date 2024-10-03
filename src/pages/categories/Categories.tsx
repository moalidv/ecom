import { actGetCategories } from "@store/categoriesSlice/act/actGetCategories";
import { useAppDispatch, useAppSelector } from "@store/hooks.ts";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records } = useAppSelector((state) => state.categories);

  const navigate = useNavigate();

  const categoriesList = records.map((item) => (
    <Col key={item.id}>
      <Card
        style={{ width: "18rem", margin: "1rem", cursor: "pointer" }}
        onClick={() => navigate(`/products/${item.prefix}`)}
      >
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
      <Row lg={3} md={2} xl={4}>
        {categoriesList}
      </Row>
    </Container>
  );
};

export default Categories;
