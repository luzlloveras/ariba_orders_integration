using my.dataModel as my from '../db/data-model';
using {s4hanacal} from './external/s4hanacal';


service orderService {
    entity Orders as projection on my.Orders;
    entity s4hanacal as projection on my.s4hanacal;
    action shipOrder();
}
