import type { ThemeNoteListOptions } from '../../../vuepress-theme-plume/lib/node'
import { defineNotesConfig } from '../../../vuepress-theme-plume/lib/node'
import { backendLanguageConfig } from './backend-language-config'
import { databaseMysqlConfig } from './database-mysql-config'

export const zhNotes: ThemeNoteListOptions = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    backendLanguageConfig,
    databaseMysqlConfig,
  ],

})
