import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(20);
      console.log(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="color">
        <h4>List Goes Here</h4>
      </section>
    </>
  );
};

export default App;
