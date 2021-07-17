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
document.getElementById('country_kenya').addEventListener('submit', submitForm);

function submitForm(e)
{
    e.preventDefault();
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
  var info = data.val();
  var keys = Object.keys(info);
  //we loop through the whole database from the first key to the last
   var index = 0;
  for ( var i = 0; i < keys.length; i++)
  {
    index = index + 1;
    var j = keys[i];
    //console.log(j)
    var f_code = info[j].f_code;
    var f_name = info[j].f_name;
    var f_type = info[j].f_type;
    var f_category = info[j].f_category;
    var keph_level = info[j].keph_level;
    var county = info[j].county;
    var sub_county = info[j].sub_county;
    var ward = info[j].ward;
    var beds = info[j].beds;
    var cots = info[j].cots;
    var operation = info[j].operation;
    //geting the data displayed in the html page
   document.getElementById("county_list").innerHTML += index +".  Fcode:  " +f_code +", F Name:    " 
   +f_name+"<br /> F Type:   " +f_type+", F Category:    "+f_category+", KEPH Level:   "+keph_level+"<br />  County:    "+county+" Sub-County:    "
   +sub_county+", Ward:   "+ward+"<br />  No.of.Beds:   "+beds+", No.of.cots   "+cots+", Operational status:    "+operation+"<br />";
  }
}