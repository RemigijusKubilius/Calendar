// Get current day
const date = new Date();

const renderCalendar = () => {

  date.setDate(1);

  const monthDays = document.querySelector(".days");

  // Get current month last day
  const lastDay = new Date(date.getFullYear(), date.getMonth()+1,0).getDate();
  
  // Get last day of previous months
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(),0).getDate();
  
  // Get firs day of months
  const firstDayIndex = date.getDay()-1;
  
  // Get index number of a day
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1,0).getDay();
  
  const nextDays = 7 - lastDayIndex;
  
  // Set months names
  const months = [
      "January",
      "February",
      "March ",
      "April ",
      "May",
      "June ",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
  ];
  
  // Display month name in html
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  
  let days = "";
  
  // Display previous month days
  for(let x = firstDayIndex; x>0; x--){
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
  }
  
  // Count current month days
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  // Display next month days
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

// Display previous month on click
document.querySelector('.prev').addEventListener("click", () => {
  date.setMonth(date.getMonth()-1);
  renderCalendar();
} );

// Display next month on click
document.querySelector('.next').addEventListener("click", () => {
  date.setMonth(date.getMonth()+1);
  renderCalendar();
} );

renderCalendar();