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
           var rootRef=firebase.database().ref("users/"+encodeAsFirebaseKey(email_id));
    
    rootRef.once('value').then(function(snapshot) {
        var firstname = snapshot.val().firstname;
        var lastname = snapshot.val().lastname;
        var email = snapshot.val().email;
        var age = snapshot.val().age;
        
        var ageI= document.getElementById("age");
        var lastnameI= document.getElementById("last_name");
        var firstnameI= document.getElementById("first_name");
        var emailI= document.getElementById("email");
        var profile= document.getElementById("welcome");
        document.getElementById("welcome").innerHTML="Welcome "+ firstname ;
        ageI.value=age;
        lastnameI.value=lastname;
        emailI.value=email;
        firstnameI.value=firstname;
    });

        var email_id = user.email;
        var email_verified = user.emailVerified;

        if(email_verified) {
            document.getElementById("verify_btn").style.display = "none";
        } else {

            document.getElementById("verify_btn").style.display = "block";
        }
        

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
    window.alert("Updated!");
   var first_name = document.getElementById("first_name").value;
   var last_name = document.getElementById("last_name").value;
       var email = document.getElementById("email").value;
       var age = document.getElementById("age").value;
     var email_id = firebase.auth().currentUser.email;
   firebase.database().ref('/users/' + encodeAsFirebaseKey(email_id)).update({
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
