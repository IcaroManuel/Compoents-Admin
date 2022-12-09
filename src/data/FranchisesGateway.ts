import { AddFranchise, UpdateFranchise } from '@avant/protos'

import { FranchiseDTO } from '@/dtos/franchises/FranchiseDTO'
import { GenericHttpResource } from './GenericHttpResource'

class FranchisesGateway extends GenericHttpResource<
  FranchiseDTO,
  AddFranchise,
  UpdateFranchise
> {
  constructor() {
    super('/franchises')
  }
}

const franchisesGateway = new FranchisesGateway()

export { franchisesGateway }
