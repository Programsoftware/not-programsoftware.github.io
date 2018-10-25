function encodeAsFirebaseKey(string) {
    return string.replace(/\%/g, '%25')
      .replace(/\./g, '%2E')
      .replace(/\#/g, '%23')
      .replace(/\$/g, '%24')
      .replace(/\//g, '%2F')
      .replace(/\[/g, '%5B')
      .replace(/\]/g, '%5D');
  };

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.


      var user = firebase.auth().currentUser;
      
      if(user !=null) {

        var email_id = user.email;
        var email_verified = user.emailVerified;

        if(email_verified) {
            document.getElementById("verify_btn").style.display = "none";
        } else {

            document.getElementById("verify_btn").style.display = "block";
        }
        document.getElementById("user_para").innerHTML = "Welcome : " + email_id + "</br> Verified : " + email_verified;

      }

    } else {
      // No user is signed in.
      window.location="../signup.html"
      document.getElementById("user_div").style.display ="none";
      document.getElementById("login_div").style.display ="block";
      document.getElementById("Register").style.display ="block";

    }

  });
function logout() {
    firebase.auth().signOut()
}
function update() {
    window.alert("Updated!")
   var first_name = document.getElementbyId("first_name").value;
   var last_name = document.getElementbyId("last_name").value;
       var email = document.getElementbyId("email").value;
       var age = document.getElementbyId("age").value;
   database.ref('/users/' + encodeAsFirebaseKey(email_id)).update({
    firstname:first_name,
    lastname:last_name,
    email:email,
    age:age
   });

   
}
function send_verification() {

  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
       // Email sent.
       window.alert("Verification sent")
  }).catch(function(error) {
  // An error happened.
      window.alert("Error : " + error.message);
  });
}   
