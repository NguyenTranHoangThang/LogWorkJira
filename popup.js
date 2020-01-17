document.getElementById('log-work').addEventListener('click', function () {
    let urls = document.getElementById('works').value;
    let urlArray = urls.split("\n");
    for (let i = 0; i < urlArray.length; i++) {
        let url = 'https://jira.shopmacher.de/browse/' + seperateInfo(urlArray[i]).id;
        let time = seperateInfo(urlArray[i]).time;
        let message_content = seperateInfo(urlArray[i]).message;
        chrome.runtime.sendMessage(
            {
                "message": "open_new_tab",
                "url": url,
                "time": time,
                "message_content": message_content,
            }
        );
    }
});

function seperateInfo(string) {
    let url = string.trim();
    let urlParts = url.split(': ');
    return {
        id: urlParts[0],
        time: urlParts[1],
        message: urlParts[2],
    };
}