(function () {
  "use strict";
  var tenHour = 0;
  var hour = 0;
  var tenMin = 0;
  var min = 0;
  var tenSec = 0;
  var secs = 0;
  var tenMilliSec = 0;
  var hunsMilliSec = 0;
  var tensHour = document.getElementById('tenHours');
  var hours = document.getElementById('hours');
  var tensMin = document.getElementById('tenMinutes');
  var mins = document.getElementById('minutes');
  var tensSec = document.getElementById('tenSeconds');
  var sec = document.getElementById('seconds');
  var tensMilliSec = document.getElementById('tenths');
  var hunMilliSec = document.getElementById('hundereths');
  var buttonStart = document.getElementById('start');
  var buttonStop = document.getElementById('stop');
  var buttonReset = document.getElementById('reset');
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tensHour.innerHTML = "0";
    hours.innerHTML = "0"
    tensMin.innerHTML = "0";
    mins.innerHTML = "0";
    tensSec.innerHTML = "0";
    sec.innerHTML = "0";
    tensMilliSec.innerHTML = "0";
    hunMilliSec.innerHTML = "0";
  };

  function startTimer () {
    hunsMilliSec++;
    if (hunsMilliSec < 9) {
      hunMilliSec.innerHTML = hunsMilliSec;
    }
    if (hunsMilliSec > 9) {
      hunMilliSec.innerHTML = "0";
      hunsMilliSec = 0;
      tensMilliSec.innerHTML = ++tenMilliSec;
    }
    if (tenMilliSec > 9) {
      tensMilliSec.innerHTML = "0";
      tenMilliSec = 0;
      sec.innerHTML = ++secs;
    }
    if (secs > 9) {
      sec.innerHTML = "0";
      secs = 0;
      tensSec.innerHTML = ++tenSec;
    }
    if (tenSec > 5) {
      tensSec.innerHTML = "0";
      tenSec = 0;
      mins.innerHTML = ++min;
    }
    if (min > 9) {
      mins.innerHTML = "0";
      min = 0;
      tensMin.innerHTML = ++tenMin;
    }
    if (tenMin > 5) {
      tensMin.innerHTML = "0";
      tenMin = 0;
      hours.innerHTML = ++hour;
    }
    if (hour > 9) {
      hours.innerHTML = "0";
      hour = 0;
      tensHour.innerHTML = ++tenHour;
    }
    if (tenHour > 2) {
      alert("You've exceeded the limitations of this stopwatch");
    }
  }
}
)();
