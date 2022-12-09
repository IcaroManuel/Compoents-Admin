import { GenericHttpResource } from '@/data/GenericHttpResource'
import { GroupDTO } from '@/dtos/groups'
import { AddGroup, UpdateGroup } from '@avant/protos'

class GroupsGateway extends GenericHttpResource<
  GroupDTO,
  AddGroup,
  UpdateGroup
> {
  constructor() {
    super('/groups')
  }
}

const groupsGateway = new GroupsGateway()

export { groupsGateway }
