$(document).ready(function(){
        $('.login-form .panelhead').on('click', function(){
            $('.panelhead.active').removeClass('active');
            $(this).addClass('active');
        var currenttable = $(this).attr('id');
            $('.login-form .tables .table.active').stop().slideUp(300, function(){
            $(this).removeClass('active');
            $('#-'+currenttable).slideDown(300, function(){
            $(this).addClass('active');
            });
        });
    });
         

});

function logout() {
    firebase.auth().signOut()
}
function encodeAsFirebaseKey(string) {
    return string.replace(/\%/g, '%25')
      .replace(/\./g, '%2E')
      .replace(/\#/g, '%23')
      .replace(/\$/g, '%24')
      .replace(/\//g, '%2F')
      .replace(/\[/g, '%5B')
      .replace(/\]/g, '%5D');
  };
  function userpage() {
      window.location="../profile.html"
  }

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("goto").style.display="block";
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

      document.getElementById("goto").style.display="none";
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
    var firstname= document.getElementById("first_name").value;
    var lastname= document.getElementById("last_name").value;
    var age= document.getElementById("age").value;
    
    
  if(password.value != confirm_password.value) {
      
   window.alert("Passwords Don't Match");
      
  } else {
    
    var userEmail = document.getElementById("Remail_field").value;
    var userPass = document.getElementById("Rpassword_field").value;
    
              
      }if (age !="" && firstname !="" && lastname !=""){
        
       firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(){
           
        firebase.database().ref('users/' + encodeAsFirebaseKey(userEmail)).set({
            firstname: firstname,
            lastname: lastname,
            age: age,
            email: userEmail
        });
    
       }, (function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      
        window.alert("Error : " + errorMessage);
        // ...
       
      }));
    }
      else{
        window.alert("Please fill in all the blanks!")
      }}



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
