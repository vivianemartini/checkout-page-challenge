//initialising a variable name data
var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;

//creation of increment function
function increment() {
     data = data + 1;
    document.getElementById("counting").innerText = data;
}

//creation of decrement function 
function decrement() {
    data = data - 1;
     document.getElementById("counting").innerText = data;
}


//initialising a variable name data
var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("count").innerText = data;

//creation of increment function
function incrementMore() {
     data = data + 1;
    document.getElementById("count").innerText = data;
}

//creation of decrement function 
function decrementLess() {
    data = data - 1;
     document.getElementById("count").innerText = data;
}