sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        sendToGA5: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
