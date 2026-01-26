//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import { vitest } from 'vitest'

export default [
  {
    ignores: [
      'eslint.config.js',
      'vitest.config.*',
      'prettier.config.*',
      'node_modules/**',
      'dist',
    ],
  },
  ...tanstackConfig,
]
