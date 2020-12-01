const monthDays = document.querySelector(".days");  // container of the days 
const date = new Date();  // creating a date element 

const renderCalender = ()=>{            //this method will help to render calender on clicking prev and next button 
    const firstDayIndex = date.getDay();  // getting the day as 2 for tuesday
    const prevMonthLastDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); // getting the last 
    //date of prev month to check weather last month is of 30 , 31 , 28 or 29 days long 
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();  // getting the 
    // last date of current date 
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(); // getting The 
    //index of last day as Thursday has 4
    const nextDays = 7 - lastDayIndex - 1; // How many days to render of last month
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    document.querySelector(".date h1").innerHTML = months[date.getMonth()]; // getting the Name of current month 
    document.querySelector(".date p").innerHTML = new Date().toDateString(); // getting the information of current month 
    
    let days = ""; // indivial div list of date to render 
    for (let x = firstDayIndex; x > 0; x--) {    // rendering previous days 
        days += `<div class="prev-date"> ${prevMonthLastDate - x + 1} </div>`;
        console.log(prevMonthLastDate)
    }
    
    for (let i = 1; i <= lastDate; i++) { // rendering current month days 
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) { // condition to check current day date 
            days += `<div class="current-date">${i}</div>`;
        }
        else {
            days += `<div>${i}</div>`;
        }
    }
    for (let j = 1; j <= nextDays; j++) { // rendering days of next month 
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;
        
}

document.querySelector(".prev").
    addEventListener('click', () => {  // functionality to prev button press
        date.setMonth(date.getMonth() - 1)
        renderCalender();

    })

document.querySelector(".next").
    addEventListener('click', () => {// functionality to next  button press
        date.setMonth(date.getMonth() + 1)
    renderCalender();

    })
    renderCalender();
