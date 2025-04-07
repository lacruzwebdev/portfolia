export const LEVELS = {
  1: 'Básico',
  2: 'Intermedio',
  3: 'Avanzado',
  4: 'Nativo',
} as const

export type Level = keyof typeof LEVELS