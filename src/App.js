import { useState } from "react";
import GetPersons from "./GetPersons";
import SearchByName from "./SearchByName";
import "./App.css";

function App() {
  const [searchName, setSearchName] = useState();

  return (
    <>
      <h1>App Celebrity TV from api.tvmaze.com</h1>
      <hr />
      <SearchByName setSearchName={setSearchName} />
      <GetPersons searchName={searchName} />
    </>
  );
}

export default App;
