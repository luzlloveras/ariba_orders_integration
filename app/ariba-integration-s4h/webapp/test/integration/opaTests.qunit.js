sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'aribaintegrations4h/test/integration/FirstJourney',
		'aribaintegrations4h/test/integration/pages/OrdersList',
		'aribaintegrations4h/test/integration/pages/OrdersObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersList, OrdersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('aribaintegrations4h') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersList: OrdersList,
					onTheOrdersObjectPage: OrdersObjectPage
                }
            },
            opaJourney.run
        );
    }
);