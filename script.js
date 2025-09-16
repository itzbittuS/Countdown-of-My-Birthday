let countDown = new Date("Jan 02, 2026 00:00:00").getTime();
let timing = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDown - now;

    // months calculation
    let nowDate = new Date();
    let targetDate = new Date("Jan 02, 2026 00:00:00");
    let months = (targetDate.getFullYear() - nowDate.getFullYear()) * 12 
               + (targetDate.getMonth() - nowDate.getMonth());

    let tempDate = new Date(nowDate);
    tempDate.setMonth(tempDate.getMonth() + months);
    if (tempDate > targetDate) {
        months--;
        tempDate.setMonth(tempDate.getMonth() - 1);
    }
    
    let days = Math.floor((distance - (tempDate - nowDate)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('months').innerHTML = months.toString().padStart(2,0);
    document.getElementById('days').innerHTML = days.toString().padStart(2,0);
    document.getElementById('hours').innerHTML = hours.toString().padStart(2,0);
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2,0);
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2,0);

    if (distance < 0) {
        clearInterval(timing);
        document.getElementById('months').innerHTML = "00";
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
    }
}, 1000);
