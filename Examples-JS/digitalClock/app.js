console.log("enlazado");

const showTime = () => {
    let date = new Date();
    formatDays(date);
    let hour = formatHour(date.getHours());
    let minute = formatHour(date.getMinutes());
    let second = formatHour(date.getSeconds());
    document.getElementById("hour").innerHTML = `${hour} : ${minute} : ${second}`;
    document.getElementById("container").classList.toggle('borderToggle');
}

const formatHour = (time) => {
    if (time < 10) {
        time = `0${time}`;
    }
    return time;
}

const formatDays = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let month = monthNames[date.getMonth()];
    let day = days[date.getDay()];
    let numDay = date.getDay();
    return document.getElementById("date").innerHTML = `${month}: ${numDay} ${day}`;
}

setInterval(showTime, 1000);