var listMessage = [];
var sendInterval = null;
var sendContents = null;

function AddMessage(contents, timeout) {
    var item = {
        "message": contents,
        "timeout": timeout * 1000
    };

    var result = new Promise(function (resolve, reject) {
        AddToList(item).then();
        resolve();
    });

    return result;
}

function AddToList(messageItem) {
    var result = new Promise(function (resolve, reject) {
        listMessage.push(messageItem);
        resolve();
    }).then(checkInterval());

    return result;
}

function checkInterval() {
    var result = new Promise(function (resolve, reject) {
        if (sendInterval == null && listMessage.length > 0) {
            var iMsg = listMessage.shift();
            sendContents = iMsg.message;
            sendInterval = setTimeout(sendMsg, iMsg.timeout);
            resolve();
        }
    });

    return result;
}

function sendMsg() {
    console.log(sendContents);
    clearTimeout(sendInterval);
    sendInterval = null;
    checkInterval().then();
}

AddMessage("a", 1).then();
AddMessage("b", 2).then();

setTimeout(() => {
    AddMessage("c", 2).then();
}, 8);