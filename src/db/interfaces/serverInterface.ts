import { UserInterface } from './userInterface'

export interface ServerInterface {
  // eslint-disable-next-line camelcase
  sv_id: String,
  prefix: String,
  users: UserInterface
}
