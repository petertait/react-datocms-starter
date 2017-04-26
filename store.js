import { action, observable } from 'mobx'
import { SiteClient } from 'datocms-client'

export const DATOCMS_CLIENT = '99cfee362eccae210a4a'

let store = null

class Store {
  @observable pages = {}

  constructor (isServer, pages) {
    this.client = new SiteClient(DATOCMS_CLIENT)
    this.pages = pages
  }

  @action getpages = () => {
    this.pages = this.client.items.all()
  }
}

export default function initStore() {
  return new Store()
}