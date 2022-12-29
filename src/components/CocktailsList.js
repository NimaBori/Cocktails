import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import Pending from "./pages/Pending";

const CocktailsList = ({ cocktails, endPoint }) => {
  const [drinks, setDrinks] = useState([Object.values(cocktails)[0]][0]);

  const { data, isPending, error } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${endPoint}`
  );

  useEffect(() => {
    if (endPoint.length > 0) {
      setDrinks([Object.values(data)[0]][0]);
    } else {
      setDrinks([Object.values(cocktails)[0]][0]);
    }
  }, [data, drinks]);

  return (
    <Container className="my-4">
      <h1 className="text-center my-5 fw-bold ">Cocktails</h1>
      <Row className="my-5 justify-content-center">
        {isPending && <Pending />}
        {error && <div>{error}</div>}
        {!drinks && (
          <h3 className="text-danger my-4 text-center">
            Your item can not find.
          </h3>
        )}
        {drinks &&
          drinks.map((drink) => (
            <Col
              key={drink.idDrink}
              className="m-4 p-2 bg-light rounded shadow"
              xs={6}
              md={4}
              lg={3}
            >
              <div style={{ width: "100%" }}>
                <img
                  className="rounded"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                />
              </div>
              <h4 className="mt-4">{drink.strDrink}</h4>
              <h5>{drink.strGlass}</h5>
              <p className="mt-3 text-secondary">{drink.strAlcoholic}</p>
              <Link to={`/cocktail/${drink.idDrink}`}>
                <Button variant="success">DETAILS</Button>
              </Link>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default CocktailsList;
