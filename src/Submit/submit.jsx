import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom"
// import { createBrowserHistory } from "history"
import { List } from "../List/List.jsx";

const history = require("history").createBrowserHistory


const Submit = () => {
   const Сomparison = (e) => {
      var login = document.getElementById("active").value;
      var password = document.getElementById("typing").value;
      if ((login == "test@example.com") & (password == "1q2w3e")) {
         ReactDOM.render(<List />, document.getElementById("root"));
      } else alert("Неверно введены данные. Попробуйте снова");
   }

   return <Link to="/list"><input type="submit" value="ВОЙТИ" onClick={Сomparison} /></Link>;
}

export { Submit };
