using orderService as service from '../../srv/order-service';

annotate service.Orders with @(
    UI.LineItem                   : [
        {
            Label: 'Document Number',
            Value: documentNumber,
        },
        {

            Label: 'Supplier Name',
            Value: supplierName,
        },
        {
            Label: 'Po Ship To City',
            Value: poShipToCity,
        },
        {
            Label: 'Po Ship To Country',
            Value: poShipToCountry,
        },
        {
            Label: 'Po Ship To State',
            Value: poShipToState,
        },
        {
            Label: 'Company Code',
            Value: companyCode,
        },
        {
            Label: 'Status',
            Value: status,
        },
        {
            $Type: 'UI.DataFieldForAction',
            Action: 'orderService.EntityContainer/shipOrder',
            Label: 'Shipping Orders'
        },
    ],
    UI.FieldGroup #GeneratedGroup1: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'Document Number',
                Value: documentNumber,
            },
/*             {
                $Type: 'UI.DataField',
                Label: 'Supplier Name',
                Value: supplierName,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Po Ship To City',
                Value: poShipToCity,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Po Ship To Country',
                Value: poShipToCountry,
            },
            {
                $Type: 'UI.DataField',
                Label: 'poShipToState',
                Value: poShipToState,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Company Code',
                Value: companyCode,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Status',
                Value: status,
            }, */
        ],
    },
    UI.Facets                     : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet1',
        Label : 'General Information',
        Target: '@UI.FieldGroup#GeneratedGroup1',
    }, ]
);
