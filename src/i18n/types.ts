type Locale = {
  label: {
    document: string
    socialNetworks: string
    addresses: string
    email: string
    notSelected: string
    name: string
    documentType: string
    timezone: string
    addressAlias: string
    addressType: string
    zipCode: string
    street: string
    complement: string
    number: string
    district: string
    city: string
    state: string
    country: string
    contactType: string
    contactValue: string
    theme: string
    language: string
    details: string
    status: string
    openHours: string
    start: string
    end: string
    weekDays: {
      sunday: string
      monday: string
      tuesday: string
      wednesday: string
      thursday: string
      friday: string
      saturday: string
    }
  }
  button: {
    submit: string
    cancel: string
    add: string
    remove: string
  }
  franchises: {
    status: {
      open: string
      closed: string
      soon: string
    }
  }
  pages: {
    generics: {
      add: {
        title: string
      }
      update: {
        title: string
      }
    }
    franchises: {
      title: string
      noSocialNetworks: string
      address: string
    }
    settings: {
      title: string
      language: {
        ptBr: string
        es: string
        en: string
      }
      theme: {
        dark: string
        light: string
      }
    }
    groups: {
      title: string
    }
  }
}

export type { Locale }
