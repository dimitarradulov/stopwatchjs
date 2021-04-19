'use strict';
let seconds = '00';
let minutes = '00';
let hours = '00';
let startStopwatch;
let isStopwatchRunning = false;
let lapCounter = 0;

function startTimer() {
  seconds = Number(seconds) + 1;
  if (seconds < 10) {
    seconds = '0' + seconds;
  } else if (seconds === 60) {
    seconds = '00';
    minutes = Number(minutes) + 1;
  }

  if (typeof minutes === 'number' && Number(minutes) < 10) {
    minutes = '0' + minutes;
  }

  if (Number(minutes) === 60) {
    minutes = '00';
    hours = Number(hours) + 1;
  }

  if (typeof hours === 'number' && Number(hours) < 10) {
    hours = '0' + hours;
  }

  document.querySelector(
    '.numbers'
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

document.querySelector('.start').addEventListener('click', function () {
  if (isStopwatchRunning) {
    clearInterval(startStopwatch);
    isStopwatchRunning = false;
    document.querySelector('.start').textContent = 'START';
  } else {
    startStopwatch = setInterval(startTimer, 1000);
    isStopwatchRunning = true;
    document.querySelector('.start').textContent = 'STOP';
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  clearInterval(startStopwatch);
  seconds = '00';
  minutes = '00';
  hours = '00';
  document.querySelector(
    '.numbers'
  ).textContent = `${hours}:${minutes}:${seconds}`;
  document.querySelector('.start').textContent = 'START';
  isStopwatchRunning = false;
  document.querySelector('.lap').classList.add('hidden');
  document.querySelector('.lap').textContent = '';
  lapCounter = 0;
});

document.querySelector('.btn-lap').addEventListener('click', function () {
  const lap = `${hours}:${minutes}:${seconds}`;
  lapCounter++;
  document.querySelector('.lap').classList.remove('hidden');
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = lapCounter;
  li.append(span);
  const span2 = document.createElement('span');
  span2.textContent = lap;
  li.append(span2);
  document.querySelector('.lap').appendChild(li);
});
