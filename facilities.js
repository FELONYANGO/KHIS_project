// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCcCth4J1GC0R-EuA7mTo7qVjdMD5SITKQ",
    authDomain: "firetest-27bde.firebaseapp.com",
    projectId: "firetest-27bde",
    storageBucket: "firetest-27bde.appspot.com",
    messagingSenderId: "890343700258",
    appId: "1:890343700258:web:ee1e3678245bbf1c8fd77b",
    measurementId: "G-BCLE68N1DG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

document.getElementById('contactform').addEventListener('submit', submitForm);
var registerRef;
function submitForm(e)
{
    e.preventDefault();

   //var registerRef = firebase.database().ref('registers');
   registerRef = firebase.database().ref('facilities');

    // get values now
    var f_code = document.getElementById('f_code').value;
    var f_name = document.getElementById('f_name').value;
    var county = document.getElementById('county').value;


    // save the details now by calling savedetails function
    savedetails(f_code, f_name, county);
    document.getElementById("contactform").reset();
    //Show alert
    //document.querySelector('.alert').style.display = 'block';
    //alert("registration succeccesfull, proceed to login");
    
    
    //hide alert after 3 seconds
    //setTimeout(function(){
    //  document.querySelector('.alert').style.display = 'none';
  // }, 6000);
  
  // window.location.href = "login.html"; 
}


// save messages to firebase
function savedetails(f_code, f_name, county)
{
   var newregistersRef = registerRef.push();
   newregistersRef.set({
       f_code: f_code,
       f_name: f_name,
       county: county
   });
   //retriveinfo();
}



