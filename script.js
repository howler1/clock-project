// showing the clock

showCurrentTime = () => {
  const time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();

  if (m < 10)
  {
    m = ("0" + m)
  }

  if (s < 10)
  {
    s = ("0" + s)
  }

  document.getElementById('clock').innerHTML = h + " : " + m + " : " + s;
  setTimeout(showCurrentTime, 1000);


};

showCurrentTime();





