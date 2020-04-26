function getCurrentDay(){
    currentDate = new Date();
    day = currentDate.getDate();
    month = currentDate.getMonth() + 1;
    year = currentDate.getFullYear();

    return day, month, year;
}

function showCurrentDay(day, month, year){
  
    day < 10 ? day = "0" + day : day = day;
    month < 10 ? month = "0" + month : month = month;

    currentDay = document.getElementById("currentDay");
    currentDay.textContent = (`${day}/${month}/${year}`);   
}

function getDaysForBirthday(day, month, year){
    todayIs = new Date(`${month}/${day}/${year}`)
    const date2 = new Date('8/28/2020');
    const diffTime = Math.abs(date2 - todayIs);
    diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return (diffDays);
}

function showDaysForBirthday(diffDays){
    daysForBirthday = document.getElementById("daysForBirthday");
    daysForBirthday.textContent = `There's ${diffDays} days for your birthday!!`;
}

getCurrentDay();
showCurrentDay(day, month, year);
getDaysForBirthday(day, month, year);
showDaysForBirthday(diffDays)

