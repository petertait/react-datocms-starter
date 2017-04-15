import { SiteClient, Image } from 'datocms-client'

const DATOCMS_CLIENT = '99cfee362eccae210a4a'

class dato {
  constructor () {
    this.client = new SiteClient(DATOCMS_CLIENT)
  }

  getArticles = () => {
    this.client.items.all({ 'filter[type]': 'article' })
  }

  getArticle = (articleId) => {
    this.client.items.find(articleId)
  }
}

export default new dato()
