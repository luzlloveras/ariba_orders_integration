sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'aribaorderstosendga5',
            componentId: 'Orders_AribaObjectPage',
            entitySet: 'Orders_Ariba'
        },
        CustomPageDefinitions
    );
});