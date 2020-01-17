var port = chrome.runtime.connect({name: "mycontentscript"});
port.onMessage.addListener(function (message, sender) {
    if (message.message === "log_work") {
        alert(message.url);
        alert(window.location);
        document.getElementById('issue-view-tempo-panel-log-work').click();
            setTimeout(function () {
                document.getElementById('time-popup').value = message.time;
                document.getElementById('comment-popup').value = message.message_content;
            }, 3000);
    }
});


