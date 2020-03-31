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
import './components/app-header.js';

const fab = document.querySelector("mwc-fab");
fab.addEventListener("click", () => {
    // alert("Do you want to add a task?");
    snack.stacked = false;
    snack.leading = false;
    snack.open();
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


var firebaseConfig = {
    apiKey: "AIzaSyDxkainB4lxMH9nuM9rKThH8aW9vI-Qifs",
    authDomain: "fluid-calendar-44ed0.firebaseapp.com",
    databaseURL: "https://fluid-calendar-44ed0.firebaseio.com",
    projectId: "fluid-calendar-44ed0",
    storageBucket: "fluid-calendar-44ed0.appspot.com",
    messagingSenderId: "636566586087",
    appId: "1:636566586087:web:e71cc21c807c839f141842",
    measurementId: "G-KD5JB960DF"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var ui = new firebaseui.auth.AuthUI(firebase.auth());

var data = null;

var anonymousUser = firebase.auth().currentUser;
ui.start('#firebaseui-auth-container', {

    autoUpgradeAnonymousUsers: true,
    signInSuccessUrl: 'https://fluid-calendar-44ed0.firebaseapp.com',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {

        signInFailure: function (error) {

            if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
                return Promise.resolve();
            }

            var cred = error.credential;

            return firebase.auth().signInWithCredential(cred);
        }
    }
});