var countdown = function() {
  var intervalTick,
  elementTimer,
  elementCountdown,

  init = function() {
    elementTimer = document.querySelector('#timer');
    elementCountdown = document.querySelector('.countdown');
  },

  start = function(time) {
    clear();

    var allSeconds = time * 60;
    elementTimer.classList.add('started');

    intervalTick = setInterval(function() {
      allSeconds--;

      update(allSeconds);

      allSeconds > 75 || warning();
      allSeconds > 25 || shake();
      allSeconds != 0 || stop();
    }, 1000);
  },

  update = function(allSeconds) {
    var minutes = (allSeconds / 60) >> 0,
        seconds = (allSeconds - minutes * 60) + '';

    elementCountdown.textContent = minutes + ':' + (seconds.length > 1 ? '' : '0') + seconds;
  },

  stop = function() {
    clearInterval(intervalTick);
    elementTimer.classList.add('finished');
  },

  clear = function() {
    stop();
    elementTimer.classList.value = [];
  },

  warning = function() {
    elementTimer.classList.add('warning');
  },

  shake = function() {
    elementTimer.classList.add('shake');
  };

  return {
    init: init,
    start: start,
    clear: clear
  };
}();

window.onload = countdown.init;