// Importing this module registers <mwc-button> as an element that you
// can use in this page.
//
// Note this import is a bare module specifier, so it must be converted
// to a path using a server such as es-dev-server.
import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";
import "@material/mwc-button";
import "@material/mwc-fab";
import '@material/mwc-dialog';
import '@material/mwc-radio';
import '@material/mwc-formfield';

const fab = document.querySelector("mwc-fab");
fab.addEventListener("click", () => {
    // alert("Do you want to add a task?");
    // snack.stacked = false;
    // snack.leading = false;
    // snack.open();
    var dialog = document.body.querySelector('#auth-popup');
    dialog.open = true;
});

const loginButton = document.querySelector("#login-button");
loginButton.addEventListener("click", () => {
    // alert("Do you want to add a task?");
    // snack.stacked = false;
    // snack.leading = false;
    // snack.open();
    var dialog = document.body.querySelector('#auth-popup');
    dialog.open = true;
});

addEventListener("load", function () {
    document.body.classList.remove("unresolved");
});

