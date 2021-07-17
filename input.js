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
// we declare the parameters we are getting from the input form as global
var region;
var region_name;
function submitForm(e)
{
    e.preventDefault();
    region = document.getElementById('region').value;
    region_name = document.getElementById('region_name').value;
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
    //Define some variables to take the freguencies for all levels
    var level_1 = 0;
    var level_2 = 0;
    var level_3 = 0;
    var level_4 = 0;
    var level_5 = 0;

    if(region=="county")
    {
        for ( var i = 0; i < keys.length; i++)
        {
            //getting a key, the unique keys generated in firebase
            var j = keys[i];
            // getting the name value for county column
            var county = info[j].county;
            //getting the keph level for the facility
            var keph_level = info.keph_level;
            //if county name in database is equal to the county name entered do the following otherwise do nothing
            if(county == region_name)
            {
               if(keph_level=="Level 1")
               {
                    // increment level 1 frequency
                    level_1 = level_1 + 1; 
                }
                else if (keph_level=="Level 2")
                {
                    level_2 = level_2 + 1;
                } 
                else if (keph_level=="Level 3")
                {
                    level_3 = level_3 + 1;
                } 
                else if (keph_level=="Level 4")
                {
                    level_4 = level_4 + 1;
                } 
                else if (keph_level=="Level 5")
                {
                     level_5 = level_5 + 1;
                 } 
                else 
                {
                  //do nothing, it means the levels were not entered as expected  
                }
            }
        }

    }
    else if(region=="sub_county")
    {
        for ( var i = 0; i < keys.length; i++)
        {
            //getting a key, the unique keys generated in firebase
            var j = keys[i];
            // getting the name value for county column
            var sub_county = info[j].sub_county;
            //getting the keph level for the facility
            var keph_level = info.keph_level;
            //if county name in database is equal to the county name entered do the following otherwise do nothing
            if(sub_county == region_name)
            {
               if(keph_level=="Level 1")
               {
                    // increment level 1 frequency
                    level_1 = level_1 + 1; 
                }
                else if (keph_level=="Level 2")
                {
                    level_2 = level_2 + 1;
                } 
                else if (keph_level=="Level 3")
                {
                    level_3 = level_3 + 1;
                } 
                else if (keph_level=="Level 4")
                {
                    level_4 = level_4 + 1;
                } 
                else if (keph_level=="Level 5")
                {
                     level_5 = level_5 + 1;
                 } 
                else 
                {
                  //do nothing, it means the levels were not entered as expected  
                }
            }
        }
    } 
    else if(region=="ward")
    {   
        for ( var i = 0; i < keys.length; i++)
        {
            //getting a key, the unique keys generated in firebase
            var j = keys[i];
            // getting the name value for county column
            var ward = info[j].ward;
            //getting the keph level for the facility
            var ward = info.ward;
            //if county name in database is equal to the county name entered do the following otherwise do nothing
            if(sub_county == region_name)
            {
               if(keph_level=="Level 1")
               {
                    // increment level 1 frequency
                    level_1 = level_1 + 1; 
                }
                else if (keph_level=="Level 2")
                {
                    level_2 = level_2 + 1;
                } 
                else if (keph_level=="Level 3")
                {
                    level_3 = level_3 + 1;
                } 
                else if (keph_level=="Level 4")
                {
                    level_4 = level_4 + 1;
                } 
                else if (keph_level=="Level 5")
                {
                     level_5 = level_5 + 1;
                 } 
                else 
                {
                  //do nothing, it means the levels were not entered as expected  
                }
            }
        }
    }
    else
    {
     console.log("region does not match any of us")
    }
  // i just update the levels falsely for test
  level_1 = 6;
  level_2 = 3;
  level_3 = 5;
  level_4 = 7;
  level_5 = 4;

    // Now at this point we can execute the code to display a graph

        title_name = region_name+"  "+region
        y_axis_text = "Frequency of KPEH Levels in "+title_name
        var chartData = {
          type: 'bar',
          "title":{  
             "text": title_name  
             }, 
             "scale-y":{  
                label: { /* Scale Title */
                  text: y_axis_text,
                  },
                  values: "0:8:1"
                },
             "scale-x":{  
                label: { /* Scale Title */
                  text: "KEPH Levels",
                  },
                  labels: ["Level 1", "Level 2 ", "Level 3","Level 4", "Level 5"]
                },
          series: [
            { 
                values: [level_1, level_2, level_3, level_4, level_5],
                'background-color': "#6666FF"
            },
          ]
           };
        zingchart.render({
          id: 'myChart',
          data: chartData,
          width: "80%"
        });
  }  
