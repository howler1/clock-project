// Showing the clock=========================================================
showCurrentTime = () => {
  //pulling hours minutes and seconds from the date and time
  const time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  //adding a '0' before single digit minutes and seconds
  if (m < 10)
  {
    m = ("0" + m)
  }

  if (s < 10)
  {
    s = ("0" + s)
  }

  //displaying the string in the element
  document.getElementById('clock').innerHTML = h + " : " + m + " : " + s;

  //setting the funtion to reset every second
  setTimeout(showCurrentTime, 1000);
};

// INVOKE THE FUNCTION!!!!
showCurrentTime();



// changing the background with time===========================================



updateBackground = () => {
  //first i need to call the hours of the day again
  const hours = new Date();
  let h = hours.getHours();

  //assign hourly values to the time of day variables
  const morn = 5
  const noon = 12
  const arvo = 13
  const eve = 17
  const night = 21

  //test
  // const h = 

  //there must be a tidier way of doing this??=====
  if(h >= morn && h < noon)
  {
  document.body.style.backgroundColor = "red";
  console.log('morning')
  };

  if(h >= noon && h < arvo)
  {
  document.body.style.backgroundColor = "green";
  document.body.style.color = "white";
  console.log('noon')
  };

  if(h >= arvo && h < eve)
  {
  document.body.style.backgroundColor = "blue";
  document.body.style.color = "orange";
  console.log('arvo')
  };

  if(h >= eve && h < night)
  {
  document.body.style.backgroundColor = "navy";
  document.body.style.color = "orange";
  console.log('eve')
  };

  if(h >= night)
  {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  console.log('night1')
  };

  if(h >= night && h < morn)
  {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  console.log('night2')
  };

};
//invoke that function
updateBackground();




