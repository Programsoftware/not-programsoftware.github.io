function logout() {
    firebase.auth().signOut()
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.location="../profile.html"
      document.getElementById("user_div").style.display ="block";
      document.getElementById("login_div").style.display ="none";
      document.getElementById("Register").style.display ="none";

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

      document.getElementById("user_div").style.display ="none";
      document.getElementById("login_div").style.display ="block";
      document.getElementById("Register").style.display ="block";

    }

  });

function login(){


    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("Error : " + errorMessage);
  // ...
});
}

function signup(){
   
    var password = document.getElementById("Rpassword_field")
  , confirm_password = document.getElementById("Rconfirm_field");
    var firstname= document.getElementbyId("first_name");
    var lastname= document.getElementbyId("last_name");
    var age= document.getElementbyId("age");
    var database = firebase.database();
  if(password.value != confirm_password.value) {
   window.alert("Passwords Don't Match");
  } else {
    
    var userEmail = document.getElementById("Remail_field").value;
    var userPass = document.getElementById("Rpassword_field").value;
      if (age=="" || firstname=="" || lastname==""){
      window.alert("Please fill in all the blanks!")
      }else{
       firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      
        window.alert("Error : " + errorMessage);
        // ...
       
      });}}
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

function show(nr) {
    document.getElementById("table1").style.display="none";
    document.getElementById("table2").style.display="none";
    document.getElementById("table"+nr).style.display="block";
}

var input = document.getElementById("password_field");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("lgbtn").click();
    }
});
