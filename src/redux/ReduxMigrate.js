import createMigration from 'redux-persist-migrate'


export const VERSION_REDUCER_KEY = 'app'

const manifest = {
  // 1: (state) => ({...state, staleReducer: undefined}),
  // 2: (state) => ({...state, app: {...state.app, staleKey: undefined}})
}

export const migration = createMigration(manifest, VERSION_REDUCER_KEY)
