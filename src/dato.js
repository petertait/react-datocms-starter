import { SiteClient } from 'datocms-client'

const DATOCMS_CLIENT = '99cfee362eccae210a4a'

class dato {
  constructor () {
    this.client = new SiteClient(DATOCMS_CLIENT)
  }

  getPage = (id) => (
    this.client.items.find(id)
  )

  getArticles = () => (
    this.client.items.all({ 'filter[type]': 'article' })
  )
}

export default new dato()
