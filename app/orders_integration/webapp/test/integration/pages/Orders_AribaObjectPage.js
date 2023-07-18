sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ordersintegration',
            componentId: 'Orders_AribaObjectPage',
            entitySet: 'Orders_Ariba'
        },
        CustomPageDefinitions
    );
});