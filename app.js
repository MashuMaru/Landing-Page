
function getName() {
    var nameValue = document.getElementById("nameInput").value;
    function pushName() {
        document.getElementById("personalGreeting").innerHTML = ("Good afternoon, " + nameValue + ".");
    }
}

// CLOCK AND DATE

function runTime () {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();

    document.getElementById("hour").innerHTML = (hour);
    document.getElementById("minute").innerHTML = (minute);
}; setInterval(runTime, 1000);

// CLOCK AND DATE



function handleSearch() {
    var searchValue = document.getElementById("search").value;
    window.open("https://www.google.com/search?q=" + searchValue + "&sourceid=chrome&ie=UTF-8","_blank");
}


