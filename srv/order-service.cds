using my.dataModel as my from '../db/data-model';

service orderService {
    entity Orders_Ariba as projection on my.Orders_Ariba;
}
