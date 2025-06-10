const parent = React.createElement(
  "div",
  { className: "parent" },[React.createElement(
    "h1",
    { className: "title" },
    "Hello World"),
  React.createElement(
    "p",
    { className: "description" },
    "This is a simple React application using createElement."
  )]    
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);