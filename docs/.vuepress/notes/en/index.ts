import type { ThemeNoteListOptions } from '../../../../vuepress-theme-plume/lib/node'
import { defineNotesConfig } from '../../../../vuepress-theme-plume/lib/node'
import { themeConfig } from './theme-config'
import { themeGuide } from './theme-guide'

export const enNotes: ThemeNoteListOptions = defineNotesConfig({
  dir: 'en/notes',
  link: '/',
  notes: [
    themeGuide,
    themeConfig,
  ],
})
