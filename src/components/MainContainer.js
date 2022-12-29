import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CocktailsList from "./CocktailsList";
import useFetch from "./useFetch";
import Pending from "./pages/Pending";

const MainContainer = () => {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );

  const { data: cocktails, isPending, error } = useFetch(url);

  const handleSearch = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  useEffect(() => {
    setUrl(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
  }, [url]);

  return (
    <Container>
      <Container>
        <div className="search-container">
          <div>search your favorite cocktail</div>
          <input
            autoFocus
            type="text"
            value={value}
            onChange={(e) => handleSearch(e)}
          />
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

export default MainContainer;
