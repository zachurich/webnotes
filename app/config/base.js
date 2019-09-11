var Rebase = require("re-base");
var firebase = require("firebase/app");
var auth = require("firebase/auth");
var database = require("firebase/database");

const app = firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: "https://webnotes-977fb.firebaseio.com/",
  databaseURL: "https://webnotes-977fb.firebaseio.com/"
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export { base, app };
