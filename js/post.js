


function encodeAsFirebaseKey(string) {
    return string.replace(/\%/g, '%25')
      .replace(/\./g, '%2E')
      .replace(/\#/g, '%23')
      .replace(/\$/g, '%24')
      .replace(/\//g, '%2F')
      .replace(/\[/g, '%5B')
      .replace(/\]/g, '%5D');
  };

var name;
var postamount2;
var postid2 = firebase.database().ref("post/"); 
postid2.once('value').then(function(snapshot) {
postamount2 = snapshot.val().postamount;
});       
$('#postbtn').on('click', function(){
    var postval = $('#postvalue').val();
    var user = firebase.auth().currentUser;
    var email_id = user.email;

    var rootRef2=firebase.database().ref("users/"+encodeAsFirebaseKey(email_id));
      rootRef2.once('value').then(function(snapshot) {        
        var firstname = snapshot.val().firstname;
        var lastname = snapshot.val().lastname;
        name = firstname+" "+lastname;
          alert(name);
    });
    if (postval!=""){
        var newamount = postamount2+1
    firebase.database().ref('post/post' + newamount).set({
        text: postval,
        name: name,       
        email: email_id
    });
    alert('Your post was successfully saved, refresh the page to view the post');
    firebase.database().ref('post/').update({
        postamount:newamount
    });
    }else{
        alert('Write something to post')
    }
});
firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {
      // User is signed in.
      

      var user = firebase.auth().currentUser;
      

      var postamount;


      if(user !=null) {

        var email_id = user.email;
        var email_verified = user.emailVerified;
        var postid = firebase.database().ref("post/");       
        var postrn;
        var htmlid=0;
        postid.once('value').then(function(snapshot) {
            postamount = snapshot.val().postamount;      
            for (postrn=0;postrn<=postamount;postrn++){ ;    
                htmlid++;                
            var rootRef=firebase.database().ref("post/post"+postrn); 
                rootRef.once('value').then(function(snapshot) {
                        var text = snapshot.val().text;
                        var email = snapshot.val().email;
                        var name = snapshot.val().name;
                        htmlid--;                
                        if (htmlid>=3){
                            
                            document.getElementById('postlocation').insertAdjacentHTML('beforeend', '<div class="card mb-4" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title" id="postname'+htmlid+'">Post for jobs/scholarships</h5> <p class="card-text" id="posttext'+htmlid+'">Requirements/scholarship amount/job description</p> <p class="card-text" id="postemail'+htmlid+'">email</p> </div> </div>');

                            
                        };


                        document.getElementById('posttext'+htmlid).innerHTML= text;
                        document.getElementById('postname' +htmlid).innerHTML= name;
                        document.getElementById('postemail' +htmlid).innerHTML= email;
                 });
            };         
        });
        var email_id = user.email;
        



        if(email_verified) {
            document.getElementById("inputpost").style.display="block";
            document.getElementById("postmsg").style.display="none";
        } else {

            document.getElementById("inputpost").style.display="none";
            document.getElementById("postmsg").style.display="block";
        }

      }

    } else {
      // No user is signed in.

      document.getElementById("goto").style.display="none";
      document.getElementById("login_div").style.display ="block";
      document.getElementById("Register").style.display ="block";

    }

  });
