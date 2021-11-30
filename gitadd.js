const newYears= prompt("Enter your next B'Date in MM/DD/YYYY format"); 
// const newYears="12/29/2021";


function countdown(){
    // const newYearDate = new Date(newYears);
    // const currentDate = new Date();
    // const currentTime=(newYearDate - currentDate);

    // const usefullDay=1000*60*60*24;

    // const day=currentTime/usefullDay;
    // const usefullHour=currentTime%usefullDay;
    // const hour= (usefullHour/usefullDay)*24;

    // const usefullMinute=hour*24%usefullDay;

    // const minute= (usefullMinute/usefullDay)*60;

    // const usefullsecond=usefullMinute*60%usefullDay;
    // const second=(usefullsecond/usefullDay)*60;

    // console.log(day);
    // console.log(hour);
    // console.log(minute);
    // console.log(second);

    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const currentTime=(newYearDate - currentDate);

    const ts=currentTime/1000;
    const tm=ts/60;
    const th=tm/60;
    const td=th/24;
    const h=(td-Math.floor(td))*24;
    const min=(h-Math.floor(h))*60;
    const sec=(min-Math.floor(min))*60;

    const getday=document.getElementsByClassName("day")[0].innerText=Math.floor(td);
    const gethour=document.getElementsByClassName("hour")[0].innerText=formatTime(Math.floor(h));
    const getMinute=document.getElementsByClassName("minute")[0].innerText=formatTime(Math.floor(min));
    const getSecond=document.getElementsByClassName("second")[0].innerText=formatTime(Math.floor(sec));

    // console.log("Hello");
function formatTime(time){
    return time<10 ? (`0${time}`) : time;
}


}

 setInterval(countdown,1000);