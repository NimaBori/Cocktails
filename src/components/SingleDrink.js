import React from "react";
import { Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import Button from "react-bootstrap/Button";
import Pending from "./pages/Pending";

const SingleDrink = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
  );

  let ingridients = [];
  data &&
    Object.values(data)[0].map((drink) => {
      for (const [key, value] of Object.entries(drink)) {
        if (key.includes("strIngredient") && value) {
          ingridients.push(value);
        }
      }
    });

  return (
    <Container>
      {isPending && <Pending />}
      {error && <div>{error}</div>}
      {data && (
        <>
          <Container className="my-5">
            <h2 className="text-center my-3 text-danger text-uppercase fw-bold font-monospace">
              {data.drinks[0].strDrink}
            </h2>
            <div className="text-center">
              <img
                className="rounded shadow"
                style={{ width: "60%", height: "60%", objectFit: "cover" }}
                src={data.drinks[0].strDrinkThumb}
                alt={data.drinks[0].strDrink}
              />
            </div>
            <div className="drink-info">
              <div className="info-container">
                <div className="title">Name:</div>
                <div className="desc">{data.drinks[0].strDrink}</div>
              </div>
              <div className="info-container">
                <div className="title">Category :</div>
                <div className="desc">{data.drinks[0].strCategory}</div>
              </div>
              <div className="info-container">
                <div className="title">Info :</div>
                <div className="desc">{data.drinks[0].strAlcoholic}</div>
              </div>
              <div className="info-container">
                <div className="title">Glass :</div>
                <div className="desc">{data.drinks[0].strGlass}</div>
              </div>
              <div className="info-container">
                <div className="title">Instructions:</div>
                <div className="desc">{data.drinks[0].strInstructions}</div>
              </div>

              <div className="info-container">
                <div className="title">Ingredients :</div>
                <div className="text-capitalize desc">
                  {ingridients.map((i) => {
                    return i + " ";
                  })}
                </div>
              </div>
              <Link to="/">
                <Button variant="info" className="mt-4 shadow" size="lg">
                  Back Home
                </Button>
              </Link>
            </div>
          </Container>
        </>
      )}
    </Container>
  );
};

export default SingleDrink;
