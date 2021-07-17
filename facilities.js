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
    var f_type = document.getElementById('f_type').value;
    var f_category = document.getElementById('f_category').value;
    var keph_level = document.getElementById('keph_level').value;
    var county = document.getElementById('county').value;
    var sub_county = document.getElementById('sub_county').value;
    var ward = document.getElementById('ward').value;
    var beds = document.getElementById('beds').value;
    var cots = document.getElementById('cots').value;
    var operation = document.getElementById('operation').value;


    // save the details now by calling savedetails function
    savedetails(f_code, f_name, f_type, f_category, keph_level, county, sub_county, ward, beds, cots, operation);
    
    //Show alert
    document.querySelector('.alert').style.display = 'block';
    
    //hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
   }, 6000);
  document.getElementById("contactform").reset();
  // window.location.href = "login.html"; 
}


// save messages to firebase
function savedetails(f_code, f_name, f_type, f_category, keph_level, county, sub_county, ward, beds, cots, operation)
{
   var newregistersRef = registerRef.push();
   newregistersRef.set({
       f_code: f_code,
       f_name: f_name,
       f_type: f_type,
       f_category: f_category,
       keph_level: keph_level,
       county: county,
       sub_county: sub_county,
       ward: ward,
       beds: beds,
       cots: cots,
       operation: operation
   });
}



