//database API configuration just a code copied from the firebase
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
//End of configuration

//An event listener for submission
document.getElementById('form_input').addEventListener('submit', submitForm);
var f_name;
function submitForm(e)
{
    e.preventDefault();
    f_name = document.getElementById('f_name').value;
    document.getElementById("my_button").disabled = true;
    retriveinfo();
}

function retriveinfo()
{
  var ref = firebase.database().ref('facilities');
  ref.on('value', gotdata);
}


//defining the function for data access now

function gotdata(data)
{
    if(f_name=="hello")
    {
        console.log("hello");
    }
    else
    {
        console.log("Nooooo");
    }
 
}