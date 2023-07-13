export default class AribaApi extends cds.RemoteService {
  async init() {
    this.reject(["CREATE", "UPDATE", "DELETE"], "*");

    this.before("READ", "*", (req) => {
      console.log(req);
      const APIKey = process.env.apikey;
      const where = req.query.SELECT.from.ref.find((obj) => obj.where);
      if (where) req.query = `GET /orders?$filter=documentNumber eq 'DO240'`;
      else req.query = `GET /orders`;
      req.headers["APIKey"] = APIKey;

    });

    this.on("READ", "*", async (req, next) => {
      const response = await next(req);
      const purchaseOrders = response.content.map((order) => {
        return {
          documentNumber: order.documentNumber,
          supplierName: order.supplierName,
          companyCode: order.companyCode,
          status: order.status,
          poShipToCity: order.poShipToCity,
          poShipToCountry: order.poShipToCountry,
          poShipToState: order.poShipToState,
        };
      });

      return purchaseOrders;
    });

    super.init();
  }
}
