import { NuxtOptionsHead } from '@nuxt/types/config/head'

const description = 'Easily find the perfect API for you and your project. Navigate through hundreds of categorized lists to spice up your project!'

const headConfig: NuxtOptionsHead = {
  titleTemplate: (chunk) => chunk ? `${chunk} - API Party` : 'API Party | Awesome collection of APIs',
  // Meta tags for SEO
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: description },
    // Twitter tags
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'API Party' },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
    { hid: 'twitter:creator', name: 'twitter:creator', content: '@bsantosh909' },
    // Open-Graph tags
    { hid: 'og:title', name: 'og:title', content: 'API Party' },
    { hid: 'og:type', name: 'og:type', content: 'website' },
    { hid: 'og:description', name: 'og:description', content: description }
  ],
  // Linking files :shrug:
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
}

export default headConfig
