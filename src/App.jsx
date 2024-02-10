import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setItems(res.data.meals))
      .catch((err) => console.log(err));
  }, []);

  const list = items.map((item) => {
    return (
      <section className="card" key={item.idMeal}>
        <img src={item.strMealThumb} alt="images" />
        <section className="content">
          <p>{item.strMeal}</p>
          <p>#{item.idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{list}</div>;
}

export default App;
