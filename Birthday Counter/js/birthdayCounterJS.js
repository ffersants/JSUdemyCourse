
function showCurrentDay(){
    currentDate = new Date();
    day = currentDate.getDate();
    month = currentDate.getMonth() + 1;
    year = currentDate.getFullYear();
    
    todayIs = new Date(`${month}/${day}/${year}`)
    const date2 = new Date('8/28/2020');
    const diffTime = Math.abs(date2 - todayIs);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffDays);
    
    day < 10 ? day = "0" + day : day = day;
    month < 10 ? month = "0" + month : month = month;

    currentDay = document.getElementById("currentDay");
    currentDay.textContent = (`${day}/${month}/${year}`)


   
    
}

showCurrentDay()