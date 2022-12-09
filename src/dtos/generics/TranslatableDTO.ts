type TranslatableDTO<T extends string> = {
  [key in T | 'locale']: string
}

export type { TranslatableDTO }
