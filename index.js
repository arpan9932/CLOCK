let a;
let date,hour,minutes,sec;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
setInterval(() => {
  a=new Date();
  date = weekday[a.getDay()];
  hour=a.getHours();
  minutes=a.getMinutes();
  sec=a.getSeconds();
document.getElementById('day').innerHTML=date;
document.getElementById('hour').innerHTML=hour;
document.getElementById('min').innerHTML=minutes;
document.getElementById('sec').innerHTML=sec;

}, 1000);