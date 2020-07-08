import React from "react";
import { Router, Route, Link } from "react-router-dom"
import { createBrowserHistory } from "history"
import { Notification } from "../Notification/notification.jsx";
import { List__all } from "../List/__all/list__all.jsx";

import "./list.styl";

const history = createBrowserHistory();

class List extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         date: new Date(),
      };

      this.navigation = React.createRef();
      this.navScript = this.navScript.bind(this);

      this.wrapper = React.createRef();

   }

   componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 10000);
   }

   componentWillUnmount() {
      clearInterval(this.timerID);
   }

   tick() {
      this.setState({
         date: new Date(),
      });
   }

   navScript(e) {
      let nav = this.navigation.current;
      for (let i = 0; i < nav.children.length; i++) {
         nav.children[i].classList.remove("active");
      }
      e.target.classList.add("active");
   }

   render() {
      return (
         <Router history={history}>
            <div className="list_desktop">
               <div id="modal"></div>

               <Notification />
               <nav
                  className="navigation"
                  ref={this.navigation}
                  onClick={this.navScript}
               >
                  <Link to="/" className="link link_active">Все</Link>
                  <Link to="/blocked" className="link">Заблокированные</Link>
                  <Link to="/active" className="link">Активные</Link>
               </nav>
               <div className="container">
                  {/* <List__all /> */}
                  <Route exact path="/" component={List__all} />

               </div>
               <div className="gradient"></div>
            </div>
         </Router>
      );
   }
}

export { List };
