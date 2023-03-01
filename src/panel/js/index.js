const tabID = chrome.devtools.inspectedWindow.tabId;

const backgroundPageConnection = chrome.runtime.connect({
  name: 'Selector Playground'
});

function sendMessageToBackground(action = null, content = null) {
  backgroundPageConnection.postMessage({
    tabId: chrome.devtools.inspectedWindow.tabId,
    action: action,
    content: content
  });
}

//Establishing connention with background.js
sendMessageToBackground('INIT');

backgroundPageConnection.onMessage.addListener(function (message) {
  // Handle responses from the background page, if any
});
