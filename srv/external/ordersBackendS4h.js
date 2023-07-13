export default class ordersBackendS4h extends cds.RemoteService {
    async init() {
      this.reject(["CREATE", "UPDATE", "DELETE"], "*");
  
      this.before("READ", "*", (req) => {
        console.log(req);
        const where = req.query.SELECT.from.ref.find((obj) => obj.where);
        if (where) req.query = `GET /orders`;
        else req.query = `GET /orders`;
  
      });
  
      super.init();
    }
  }
  