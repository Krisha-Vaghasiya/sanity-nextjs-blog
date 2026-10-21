'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { documentInternationalization } from '@sanity/document-internationalization'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes/index';
import { structure } from './sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'Blog Website',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [
    structureTool({ structure }),

    visionTool({
      defaultApiVersion: apiVersion,
    }),

    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'hi', title: 'Hindi' },
        { id: 'gu', title: 'Gujarati' },
      ],

      schemaTypes: ['post'],
    }),
  ],

  schema,
})