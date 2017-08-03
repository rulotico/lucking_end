var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./My Project-a319141aaec2.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-project-1470432143530.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules


var register= function register(name,email){

  console.log("=============");
  console.log(name);
  console.log(email);
  console.log("=============");

  var db = admin.database();
  var ref = db.ref("leads");
  var usersRef = ref.child("users");
  usersRef.set({
      name: name,
      email: email
    });


}



module.exports.register = register;
