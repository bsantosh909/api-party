import { NuxtOptionsModule } from '@nuxt/types/config/module'

import contentConfig from './modules/content'

const ModuleConfig: NuxtOptionsModule[] = [['@nuxt/content', contentConfig]]

export default ModuleConfig
