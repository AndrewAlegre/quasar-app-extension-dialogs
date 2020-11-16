import { v4 as uuid } from 'uuid'
import remove from 'lodash.remove'

export function show (state, { id = uuid(), name, props, dialogProps }) {
  state.list.push({ id, name, props, dialogProps })
}

export function hide (state, { id, name }) {
  if (id) {
    remove(state.list, (x) => x.id === id)
  }
  else if (name) {
    remove(state.list, (x) => x.name === name)
  }
}
