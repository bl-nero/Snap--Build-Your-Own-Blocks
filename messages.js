function installMessageHandlers(handlers) {
    window.addEventListener('message', onMessage, false);

    function onMessage(event) {
        const data = event.data;
        if (handlers.hasOwnProperty(data.type)) {
            handlers[data.type].apply(null, data.args);
        } else {
            console.error('Unknown message type: ' + data.type);
        }
    }
}

function createMessageApi(target, functionNames) {
    return functionNames.reduce(function(api, functionName) {
        api[functionName] = function() {
            console.log(target);
            console.log(Object.keys(target));
            target.postMessage({
                type: functionName,
                args: Array.prototype.slice.call(arguments)
            }, '*');
        };
        return api;
    }, {});
}
