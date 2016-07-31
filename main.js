(function() {

'use strict';

installMessageHandlers({
    initializeCloud: initializeCloud,
    openProjectsBrowser: openProjectsBrowser
});

const outsideWorldElement = document.getElementById('outside-world');
const outsideWorld = new WorldMorph(outsideWorldElement);
const cloudUi =
    new CloudUiMorph(document.getElementById('sandbox').contentWindow);

cloudUi.openIn(outsideWorld);
loop();

function loop() {
    requestAnimationFrame(loop);
    outsideWorld.doOneCycle();
}

const sandboxApi = createMessageApi(
    document.getElementById('sandbox').contentWindow,
    ['onCloudInitialized', 'onCloudError', 'loadText']);

function initializeCloud() {
    cloudUi.initializeCloud();
//    const username = window.prompt('User name');
//    const password = window.prompt('Password');
//    const staySignedIn = true;  // For now.
//    const pwh = hex_sha512(password);
//
//    SnapCloud.login(
//        username,
//        pwh,
//        function () {
//            if (staySignedIn) {
//                const str = SnapCloud.encodeDict(
//                    {
//                        username: username,
//                        password: pwh
//                    }
//                );
//                localStorage['-snap-user'] = str;
//            }
//            sandboxApi.onCloudInitialized(username);
//        },
//        sandboxApi.onCloudError
//    );
}

function openProjectsBrowser() {
    cloudUi.openProjectsBrowser();
//    const projectName = window.prompt('Project name');
//
//    var myself = this;
//    SnapCloud.reconnect(
//        function () {
//            SnapCloud.callService(
//                'getRawProject',
//                function (response) {
//                    SnapCloud.disconnect();
//                    sandboxApi.loadText(response);
//                },
//                sandboxApi.onCloudError,
//                [projectName]
//            );
//        },
//        sandboxApi.onCloudError
//    );
}

})();
