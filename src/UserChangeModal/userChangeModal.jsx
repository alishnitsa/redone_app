import React from "react";
import ReactDOM from "react-dom";

// import { closeChange } from "../scripts/openOrCloseChange.jsx";
import { UserChangeModal__svg } from "./__SVG/userChangeModal__svg.jsx"

// import "../css/change.css";
import "./userChangeModal.styl";

class Change extends React.Component {
   constructor(props) {
      super(props);
      this.wrapper = React.createRef();
      // this.openChange = this.openChange.bind(this);
      this.closeChange = this.closeChange.bind(this);
   }

   closeChange() {
      ReactDOM.render('', document.getElementById("modal"))
   }

   render() {
      return (
         <div className="change_wrapper">
            <div className="change">
               <div className="change_title">Иванов Иван</div>
               <div className="path" onClick={this.closeChange}>
                  <UserChangeModal__svg />
               </div>
               <form className="change_form">
                  <input type="text" className="fname" />
                  <input type="text" className="name" />
                  <input type="text" className="mname" />
                  <select
                     name="change_dropDown"
                     id="change_dropDown"
                     defaultValue="active"
                  >
                     <option value="paused">Приостановлен</option>
                     <option value="active">Подписка активна</option>
                     <option value="blocked">Заблокирован</option>
                  </select>
                  <input type="button" value="Сохранить" onClick={this.closeChange} />
               </form>
            </div>
         </div>
      );
   }
}


export { Change };
