firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("profilebtn").style.display="block";      

    } else {
      // No user is signed in.
    document.getElementById("profilebtn").style.display="none";      

    }

  });
