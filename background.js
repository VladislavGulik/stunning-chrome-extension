chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "video"
    }
    chrome.tabs.sendMessage(tab.id, msg)
}