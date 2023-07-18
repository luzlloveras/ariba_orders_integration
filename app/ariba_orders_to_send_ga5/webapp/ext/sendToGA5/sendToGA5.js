sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/model/odata/v2/ODataModel"
], function(MessageToast, ODataModel) {
    'use strict';

    return {
        send: function(selectedItem) {
            /* Crear una instancia del modelo OData
            var oModel = new ODataModel("/sap/opu/odata/sap/ZORDERS_SERVICE_BINDING");
            */

            // Obtener los datos del ítem seleccionado
            var documentNumber = selectedItem.documentNumber;
            var supplierName = selectedItem.supplierName;
            var companyCode = selectedItem.companyCode;
            var status = selectedItem.status;
            var poShipToCity = selectedItem.poShipToCity;
            var poShipToCountry = selectedItem.poShipToCountry;
            var poShipToState = selectedItem.poShipToState;

            // Crear el objeto de datos para enviar mediante OData
            var data = {
                documentNumber: documentNumber,
                supplierName: supplierName,
                companyCode: companyCode,
                status: status,
                poShipToCity: poShipToCity,
                poShipToCountry: poShipToCountry,
                poShipToState: poShipToState
            };

            // Post Orders to GA5
           
            const s4service =  cds.connect.to('GA5');    
            let response;
                
            try {
                response = s4service.post('/Orders');
                return response;
            } catch (error) {
                req.error(500, error.message)
            }
        }


    };
});