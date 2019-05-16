firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("profilebtn").style.display="block";      
            document.getElementById("signinbtn").style.display="none";    
    } else {
      // No user is signed in.
    document.getElementById("profilebtn").style.display="none";      
         document.getElementById("signinbtn").style.display="block";      
    }

  });
