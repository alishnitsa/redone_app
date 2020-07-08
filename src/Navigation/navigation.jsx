import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import { createBrowserHistory } from "history"
import { List } from "../List/List.jsx"

const history = require("history").createBrowserHistory



class Navigation extends React.Component {
   constructor(props) {
      this.Comparison = this.Comparison.bind(this);
   }
   Сomparison(e) {
      var login = document.getElementById("active").value;
      var password = document.getElementById("typing").value;
      if ((login == "test@example.com") & (password == "1q2w3e")) {
         // <Link to="/list"></Link>
         ReactDOM.render(<List />, document.getElementById("root"));
      } else alert("Неверно введены данные. Попробуйте снова");
   }
   render() {
      <BrowserRouter history={history}>
         <Route exact path="/all" component={<List />} />
      </BrowserRouter>
   }
}

export { Navigation }