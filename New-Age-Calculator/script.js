const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){

    let toyear = new Date();
   let yearInput = document.getElementById("year").value;
    let tomonth = new Date();
   let monthInput = document.getElementById("month").value;
   let today = new Date();
   let dayInput = document.getElementById("day").value;

  let dateString = `${yearInput}-${monthInput}-${dayInput}`;
  let inputDate = new Date(dateString);

    //  let inputRequired = "This field is required"
    //  let inputDayError = "Must be valid day";    
    //  let inputMonthError = "Must be a valid month";
    //  let inputYearError = "Must be a valid year";
    //  let dayError = document.querySelector(".day-err");
    //  let monthError = document.querySelector(".month-err");
    //  let yearError = document.querySelctor(".month-err");
    //      function checkDay(){
    //      let Day = day
    //      if (Day == ""){
    //      dayErr.innerHTML = inputRequired;
    //      return false;
    //    } else if (Day < 1 || Day > 31){
    //     dayErr.innerHTML = inputDayError;
    //    } else {
    //         dayErr == "";
    //    }
    //     }



    // let dayErrr = document.getElementById("error1")
    // let monthErr = document.getElementById("error2")
    // let yearErr = document.getElementById("error3")
    
    // if (){
    //     dayErr.textContent = "Must be a valid day";
    //     document.getElementById("day").classList.add("inputjs");
    //     return; 
    // } else{
    //     document.getElementById()
    // }


    let birthMonth,birthDate,birthYear;
    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1, 
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if ( 
        birthDetails.year > currentYear ||
        (birthDetails.month > currentMonth &&
            birthDetails.year == currentYear) ||
            (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ) {
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    } 

    birthYear = currentYear - birthDetails.year;

    if (currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;   
    }
    else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }
    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate,birthMonth,birthYear);
}

function displayResult(bDate,bMonth,bYear){
    document.getElementById("output-year").textContent = bYear;
    document.getElementById("output-month").textContent = bMonth;
    document.getElementById("output-day").textContent = bDate;
}

function leapChecker(years) {
    if(years % 4 == 0 || (years % 100 == 0 && years % 400 == 0)){
        // return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0){
         months[1] = 29;
    }
     else{
         months[1] = 28;
    }
}


