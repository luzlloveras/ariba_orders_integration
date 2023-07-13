/* checksum : adaccb823e7ca4ee852c5aab9896c24d */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.supported.formats : 'atom json xlsx'
service s4hanacal {};

@cds.external : true
@cds.persistence.skip : true
@sap.searchable : 'true'
@sap.pageable : 'false'
@sap.content.version : '1'
entity s4hanacal.ZARIBA_PURCHASE_ORDERSet {
  @sap.unicode : 'false'
  @sap.label : 'DOCUMENTNUMBER'
  @sap.updatable : 'false'
  key Documentnumber : LargeString not null;
  @sap.unicode : 'false'
  @sap.label : 'SUPPLIERNAME'
  @sap.updatable : 'false'
  Suppliername : LargeString not null;
  @sap.unicode : 'false'
  @sap.label : 'POSHIPTOCITY'
  Poshiptocity : LargeString not null;
  @sap.unicode : 'false'
  @sap.label : 'POSHIPTOCOUNTRY'
  @sap.filterable : 'false'
  Poshiptocountry : LargeString not null;
  @sap.unicode : 'false'
  @sap.label : 'POSHIPTOSTATE'
  Poshiptostate : LargeString not null;
  @sap.unicode : 'false'
  @sap.label : 'COMPANYCODE'
  @sap.updatable : 'false'
  Companycode : LargeString not null;
  @sap.unicode : 'false'
  @sap.label : 'DISPUTEID'
  Disputeid : LargeString;
  @sap.unicode : 'false'
  @sap.label : 'STATUS'
  Status : LargeString not null;
};


