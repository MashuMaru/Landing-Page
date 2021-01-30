
function getName() {
    var nameValue = document.getElementById("nameInput").value;
    document.cookie = nameValue;
} 

// function getName() {
//     document.getElementById("personalGreeting").innerHTML =(greeting+userName+".");
// }



// CLOCK AND DATE
function runTime () {
    let userName = document.cookie;
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var date = time.getDate();
    var year = time.getFullYear();
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    var fullWeekday = weekday[time.getDay()];

    var month = new Array(12);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
    var fullMonth = month[time.getMonth()];



    if (minute < 10) {
        minute = "0" + minute;
    }

    if (hour < 10) {
        minute = "0" + hour;
    }

// GREETING MESSAGE
    if (hour < 12) {
        var greeting = "Good morning, ";
    } else if (hour < 18) {
        var greeting = "Good afternoon, ";
    } else {
        var greeting = "Good evening, ";
    }
   
    document.getElementById("personalGreeting").innerHTML =(greeting+userName+".");
   
  

    // CLOCK AND DATE
    document.getElementById("hour").innerHTML = (hour);
    document.getElementById("minute").innerHTML = (minute);
    document.getElementById("day").innerHTML = (fullWeekday + " ");
    document.getElementById("date").innerHTML = (date + " ");
    document.getElementById("month").innerHTML = (fullMonth + " ");
    document.getElementById("year").innerHTML = (year);
}; setInterval(runTime, 1000);
// CLOCK AND DATE



function handleSearch() {
    var searchValue = document.getElementById("search").value;
    window.open("https://www.google.com/search?q=" + searchValue + "&sourceid=chrome&ie=UTF-8","_blank");
}




