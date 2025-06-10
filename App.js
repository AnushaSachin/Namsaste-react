// ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App

/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */


// imported react and reactdom from nodemodule folder
import React from 'react';
import ReactDOM from 'react-dom/client';

// Create the first heading element
const heading = React.createElement(
    "h1",
    {
      id: "title-one", // Changed id for clarity, though not strictly required for key fix
      // key: "heading-one" // You could also add a key directly here if not in an array
    },
    "Heading One" // Changed text for clarity
);

// Create the second heading element
const heading1 = React.createElement(
    "h1",
    {
      id: "title-two", // Changed id for clarity
      // key: "heading-two" // You could also add a key directly here if not in an array
    },
    "Heading Two" // Changed text for clarity
);

// Create the container element
// When passing an array of elements as children, each element in the array
// must have a unique 'key' prop. This helps React efficiently update the UI.
// Since heading and heading1 are already created React elements,
// we use React.cloneElement to add the key prop.
// In a more typical scenario (e.g., mapping over data),
// the key would be part of the createElement's props directly.
const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [
        // Each child in this array now has a unique and stable 'key'
        // 'key' is a special prop React uses internally for list reconciliation.
        React.cloneElement(heading, { key: "uniqueKey1" }), // Assign a unique key
        React.cloneElement(heading1, { key: "uniqueKey2" }) // Assign another unique key
    ]
);

// Get the root DOM element where the React app will be mounted
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the React element (container) into the root DOM element
root.render(container);
