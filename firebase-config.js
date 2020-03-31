
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
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
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