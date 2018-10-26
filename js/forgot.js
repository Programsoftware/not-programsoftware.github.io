function forgot(){
  var auth = firebase.auth();
  var emailAddress = getDocumentElementById("email_field");

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  window.alert("Email sent")
  window.location="signup.html"
}).catch(function(error) {
  // An error happened.
});

}
