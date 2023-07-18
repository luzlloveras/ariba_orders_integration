using orderService as service from '../../srv/order-service';

annotate service.Orders_Ariba with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Document Number',
            Value : documentNumber,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Supplier Name',
            Value : supplierName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Po Ship To City',
            Value : poShipToCity,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Po Ship To Country',
            Value : poShipToCountry,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Po Ship To State',
            Value : poShipToState,
        },
    ]
);
annotate service.Orders_Ariba with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Document Number',
                Value : documentNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Supplier Name',
                Value : supplierName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Po Ship To City',
                Value : poShipToCity,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Po Ship To Country',
                Value : poShipToCountry,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Po Ship To State',
                Value : poShipToState,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Company Code',
                Value : companyCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Status',
                Value : status,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
