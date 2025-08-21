import type { ThemeNoteListOptions } from '../../../../vuepress-theme-plume/lib/node'
import { defineNotesConfig } from '../../../../vuepress-theme-plume/lib/node'
// import { plugins } from './plugins'
import { themeConfig } from './theme-config'
import { themeGuide } from './theme-guide'

export const zhNotes: ThemeNoteListOptions = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    themeGuide,
    themeConfig,
    // plugins,
  ],
})
