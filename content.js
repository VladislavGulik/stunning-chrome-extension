chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log('message', message);
    if (message.txt === "video") {
        document.body.innerHTML = `
            <div class=modal>
                <iframe width="854" height="480" src="https://www.youtube.com/embed/461C6M8t3_k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        `
    }
}
