AOS.init();

// passing data from index.html
function passValues() {
    var name = document.getElementById("nameInput").value;
    localStorage.setItem("textvalue", name);
    return false;
}


// clock and date 
function runTime () {
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

    var copyright = year;
    document.getElementById("footer-info").innerHTML = copyright;

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    // personal greeting message
    if (hour < 12) {
        var greeting = "Good morning, ";
    } else if (hour < 18) {
        var greeting = "Good afternoon, ";
    } else {
        var greeting = "Good evening, ";
    }
    // retrieving data from index.html
    var userName = localStorage.getItem("textvalue");
    document.getElementById("personalGreeting").innerHTML = greeting+userName+".";
    document.getElementById("title-name").innerHTML = "Welcome, "+userName+"!";
   

    document.getElementById("hour").innerHTML = (hour);
    document.getElementById("minute").innerHTML = (minute);
    document.getElementById("day").innerHTML = (fullWeekday + " ");
    document.getElementById("date").innerHTML = (date + " ");
    document.getElementById("month").innerHTML = (fullMonth + " ");
    document.getElementById("year").innerHTML = (year);

    // var inputIndex = document.getElementById("nameInput");
    // inputIndex.addEventListener("keyup", function(event) {
    //     if (event.keyCode === 13) {
    //      event.preventDefault();
    //      document.getElementById("submit").click();
    //     }
    //   });

    //   var inputLanding = document.getElementById("search");
    //   inputLanding.addEventListener("keyup", function(event) {
    //     if (event.keyCode === 13) {
    //      event.preventDefault();
    //      document.getElementById("searchBtn").click(handleSearch);
    //      var searchValue = document.getElementById("search").value;
    //      window.open("https://www.google.com/search?q=" + searchValue + "&sourceid=chrome&ie=UTF-8","_blank");
    //     }
    //   });

}; setInterval(runTime, 1000);



// interface with google
function handleSearch() {
    var searchValue = document.getElementById("search").value;
    window.open("https://www.google.com/search?q=" + searchValue + "&sourceid=chrome&ie=UTF-8","_blank");
}

document.getElementById("search").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("searchBtn").click();
    }
})


document.getElementById("nameInput").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
})



