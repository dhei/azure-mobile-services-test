﻿// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------

function createPlatformSpecificFunctions() {

    var alertFunction;

    alertFunction = function (text, done) {
        window.alert(text);
        if (done) {
            done();
        }
    }

    var saveAppInfo = function (lastAppUrl, lastGatewayUrl, lastAppKey) {
        /// <param name="lastAppUrl" type="String">The last value used in the application URL text box</param>
        /// <param name="lastGatewayUrl" type="String">The last value used in the gateway URL text box</param>
        /// <param name="lastAppKey" type="String">The last value used in the application key text box</param>        
        var state = {
            lastAppUrl: lastAppUrl,
            lastGatewayUrl: lastGatewayUrl,
            lastAppKey: lastAppKey,            
        };
    }

    function getPushChannel() {
        // we don't expose a promise library in the HTML world. Emulate for the purposes of testing.
        var promise = new Promise();
        promise._resolveSuccess({
            uri: 'https://bn1.notify.windows.com/?token=AgYAAADs42685sa5PFCEy82eYpuG8WCPB098AWHnwR8kNRQLwUwf%2f9p%2fy0r82m4hxrLSQ%2bfl5aNlSk99E4jrhEatfsWgyutFzqQxHcLk0Xun3mufO2G%2fb2b%2ftjQjCjVcBESjWvY%3d'
        });
        return promise;
    }

    return {
        alert: alertFunction,
        saveAppInfo: saveAppInfo,
        IsHTMLApplication: true,
        getPushChannel: getPushChannel
    };
}

var testPlatform = createPlatformSpecificFunctions();
