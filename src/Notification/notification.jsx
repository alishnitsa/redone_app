import React from "react";

// import "../css/modal.css";
import "./notification.styl";

class Notification extends React.Component {
   constructor(props) {
      super(props);
      this.modal = React.createRef();
      this.closeModal = this.closeModal.bind(this);
   }

   closeModal() {
      this.modal.current.style.display = "none";
   }

   render() {
      return (
         <div id="notification" ref={this.modal}>
            <div className="notification__window">
               <div className="close-wrapper">
                  <div className="close-icon" onClick={this.closeModal}>
                     <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM12.9375 11.3625L11.3625 12.9375L9 10.575L6.6375 12.9375L5.0625 11.3625L7.425 9L5.0625 6.6375L6.6375 5.0625L9 7.425L11.3625 5.0625L12.9375 6.6375L10.575 9L12.9375 11.3625Z"
                           fill="white"
                        />
                     </svg>
                  </div>
               </div>
               <div className="notification__text">Authorization required</div>
            </div>
         </div>
      );
   }
}

export { Notification };
