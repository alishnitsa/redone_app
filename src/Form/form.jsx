import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Link } from "react-router-dom"
import { createBrowserHistory } from "history"
import { Form__svg } from "./__SVG/form__svg.jsx"
import { List } from "../List/list.jsx";
import "./form.styl";


const history = createBrowserHistory();

class Form extends React.Component {
   constructor(props) {
      super(props);
      this.password = React.createRef();
      this.login = React.createRef();
      this.viewPass = this.viewPass.bind(this);
      this.comparison = this.comparison.bind(this);
   }
   viewPass() {
      let x = this.password.current;
      if (x.type == "password") {
         x.type = "text";
      } else {
         x.type = "password";
      }
   }
   comparison() {
      let login = this.login.current.value;
      let password = this.password.current.value;
      if ((login == "test@example.com") & (password == "1q2w3e")) {
         ReactDOM.render(<List />, document.getElementById("root"));
      } else alert("Неверно введены данные. Попробуйте снова");
   }
   render() {
      return (
         // <Router history={history}>
         <form action="" className="form_group">
            <label>
               <input
                  type="text"
                  id="active"
                  className="active"
                  name="active"
                  placeholder="Active"
                  ref={this.login}

               />
            </label>
            <label>
               <input
                  type="password"
                  id="typing"
                  name="typing"
                  placeholder="******"
                  maxLength="16"
                  ref={this.password}
               />
            </label>
            <input type="button" className="view_psw" onClick={this.viewPass} />
            <Form__svg />

            {/* <Link to="/list"></Link> */}
            <input type="submit" value="ВОЙТИ" onClick={this.comparison} />

            {/* <Submit /> */}
         </form>
         // {/* <Route path="/list" component={List}></Route> */ }
         // </Router>
      );
   }
}

export { Form };
