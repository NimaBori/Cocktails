// useRef use for setting up search input and input focus.
import React, { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import CocktailsList from "./CocktailsList";
import useFetch from "./useFetch";
import Pending from "./pages/Pending";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const CocktailsContainer = () => {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"
  );

  const { data: cocktails, isPending, error } = useFetch(url);

  const searchValue = useRef("");

  function searchCocktail() {
    setValue(searchValue.current.value);
  }

  useEffect(() => {
    setUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
  }, [url]);

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <Container>
      <Container>
        <div className="search-container">
          <div>search your favorite cocktail</div>
          <input type="text" ref={searchValue} onChange={searchCocktail} />
        </div>
      </Container>
      <Container>
        {error && <Container>{error}</Container>}
        {isPending && <Pending />}
        {cocktails && <CocktailsList cocktails={cocktails} endPoint={value} />}
      </Container>
    </Container>
  );
};

export default CocktailsContainer;
