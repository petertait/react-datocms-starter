import { SiteClient } from 'datocms-client'

const DATOCMS_CLIENT = '99cfee362eccae210a4a'

class dato {
  constructor () {
    this.client = new SiteClient(DATOCMS_CLIENT)
  }

  getPage = (id) => (
    this.client.items.find(id)
  )

  getPages = (id) => (
    this.client.items.all({ 'filter[id]': id })
  )

  getItems = (type) => (
    this.client.items.all({ 'filter[type]': type })
  )
}

export default new dato()
