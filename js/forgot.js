function forgot(){
  var auth = firebase.auth();
  var emailAddress = document.getElementById("email_field");

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  window.alert("Email sent")
  window.location="signup.html"
}).catch(function(error) {
  // An error happened.
});

}
