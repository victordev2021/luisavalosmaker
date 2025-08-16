import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "./App.css";

function CatalogItems({ id, name, age }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{id}</p>
      <p>{age}</p>
    </article>
  );
}

function App() {
  const [catalog, setCatalog] = useState([]);
  const getCatalog = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/catalog/");
    const data = await response.json();
    console.log(data);
    setCatalog(data);
  };
  useEffect(() => {
    getCatalog();
  }, []);
  return (
    <>
      <Button variant="contained">Hello world</Button>
      <div>
        {catalog.length === 0
          ? "Load..."
          : catalog.map((catalog) => (
              <CatalogItems
                key={catalog.id}
                id={catalog.id}
                name={catalog.name}
                age={catalog.age}
              />
            ))}
      </div>
    </>
  );
}
export default App;
