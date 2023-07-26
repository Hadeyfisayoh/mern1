import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

const CardComponent = ({category, idx}) => {
  
  return (
    <Card>
      <Card.Img
        crossOrigin="anonymous"
        variant="top"
        src={category.image ?? null}
      />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>
          {category.description}
        </Card.Text>
        <LinkContainer to={`/product-list/category/${category.name}`}>
          <Button variant="primary">Go to the category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};
export default CardComponent;
