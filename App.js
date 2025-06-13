import React from "react";
import ReactDOM from "react-dom/client";


//react element
const Title = () => (
<h1>Heading from Title</h1>)
const element =  <h2>Heading from element</h2>;
//react component
const Heading = () => {
  return(
  <div>
    <Title />
  <h1>Heading from component</h1>
  {element}

  </div>
  )
};

// render the react element to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

