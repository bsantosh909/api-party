import { NuxtOptionsModule } from '@nuxt/types/config/module'

import tailwindConfig from './modules/tailwindcss'
import colorModeConfig from './modules/color-mode'

const ModuleConfig: NuxtOptionsModule[] = [
  '@nuxt/typescript-build',
  ['@nuxtjs/tailwindcss', tailwindConfig],
  ['@nuxtjs/color-mode', colorModeConfig],
  '@nuxt/image',
]

export default ModuleConfig
