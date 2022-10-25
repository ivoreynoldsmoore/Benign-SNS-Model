import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import User from "./User";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App users={[
      new User({key:"0", name: "Alice", id: 0, picture:"", friends: [1,2,3]}),
      new User({key:"1", name: "Bob", id: 1, picture: "", friends: [0,2,3]}),
      new User({key:"2", name: "Charlie",id: 2, picture: "", friends: [0,1]}),
      new User({key:"3", name: "Guest", id: 3, picture: "", friends: [0,1]}),
      new User({key:"4", name: "Influencer 1", id: 4, picture: "", friends: []}),
      new User({key:"5", name: "Influencer 2", id: 5, picture: "", friends: []}),
      new User({key:"6", name: "Influencer 3", id: 6, picture: "", friends: []}),
      ]}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
