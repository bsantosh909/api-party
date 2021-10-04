import { IContentOptions } from '@nuxt/content/types/index'

const contentConfig: IContentOptions = {
  fullTextSearchFields: ['name', 'description'],
  nestedProperties: ['features.https'],
  liveEdit: false,
}

export default contentConfig
