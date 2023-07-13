export default class OrderService extends cds.ApplicationService {
  async init() {

// Leer Orders de ariba
    const {
      Orders
    } = this.entities

    this.on("READ", Orders, async (req) => {
      const aribaApi = await cds.connect.to("AribaAPI")
      return aribaApi.tx(req).run(req.query)

    })

    this.after("READ", Orders, response => {
      response.$count = response.length
      console.log(response)
    })

    // Leer Orders de S4H
    const {
      s4hanacal
    } = this.entities

    const s4service = await cds.connect.to('s4hanacal');    

    this.on("READ", s4hanacal, async (req) => {
        let response;

        try {
            response = s4service.get('/ZARIBA_PURCHASE_ORDERSet');
            return response;
        } catch (error) {
            req.error(500, error.message)
        }
    })

  }
}