import React from "react";
import ReactDOM from "react-dom";
import { Change } from "../UserChangeModal/userChangeModal.jsx";


function openChange() {
   document.getElementsByClassName("change_wrapper")[0].style.display = "flex";
}

function closeChange() {
   ReactDOM.render('', document.getElementById("modal"))
}

export { openChange, closeChange };
