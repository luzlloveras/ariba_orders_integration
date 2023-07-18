sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'aribaorderstosendga5',
            componentId: 'Orders_AribaList',
            entitySet: 'Orders_Ariba'
        },
        CustomPageDefinitions
    );
});