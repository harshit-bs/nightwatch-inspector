/**
 * TRY NIGHTWATCH COMMANDS
 */

const tryNightwatchCommandId = 'tryNightwatchCommand';
const nightwatchCommandId = 'nightwatchCommand';

function tryNightwatchCommand() {
  const nightwatchCommandElement = document.getElementById(nightwatchCommandId);
  const nightwatchCommand = nightwatchCommandElement.value;

  // setting explore mode false when trying out nightwatch commands
  sendMessageToBackground('EXPLORE_MODE', false);
  webSocket.send(nightwatchCommand);
}

document.getElementById(tryNightwatchCommandId).addEventListener('click', tryNightwatchCommand);

document.querySelector('#nightwatchCommand').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    tryNightwatchCommand();
  }
});
