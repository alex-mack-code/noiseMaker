// noisemaker JS file

window.onload = function()
{
    let d = new Date();
    document.getElementById('testjavascript').innerHTML = "<h1>Today's date is " + d + "</h1>"



    function myFunction() {
        document.getElementById("clicked").innerHTML = "YOU CLICKED ME!";
      }
    
    document.getElementById("myButton").onclick = function() {myFunction()};
}





