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

  }
}