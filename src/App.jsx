import { useState } from "react";
import data from "./data.js";
import Paragraph from "./Paragraph.jsx";
const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };
  return (
    <section className="section-center">
      <h4>Tired Of the boring lorem ipsum??</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="count">Paragraph: </label>
        <input
          type="number"
          name="count"
          id="count"
          min={1}
          max={8}
          step={1}
          value={count}
          // Updates the count state as soon as it changes.
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        <Paragraph data={text}></Paragraph>
      </article>
    </section>
  );
};
export default App;
