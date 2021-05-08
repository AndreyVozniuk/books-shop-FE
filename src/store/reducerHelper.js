import { toUpperCaseFirstLetter } from '../helpers'

function createDefaultActionHandlers(flagName, options) {
  const loadingStateName = 'is' + toUpperCaseFirstLetter(flagName) + 'Loading'
  const errorStateName = flagName + 'Error'
  const successMessageStateName = 'success' + toUpperCaseFirstLetter(flagName) + 'Message'

  return {
    pending: (state) => {
      if (options.loadingHandler) {
        state[loadingStateName] = true
      }
      state[errorStateName] = null
    },

    fulfilled: (state, { payload }) => {
      if (options.loadingHandler) {
        state[loadingStateName] = false
      }
      state[successMessageStateName] = payload?.message || 'Response without success message'
    },

    rejected: (state, { error }) => {
      if (options.loadingHandler) {
        state[loadingStateName] = false
      }
      state[errorStateName] = error
    },
  }
}

export function asyncActionsCreator(action, flagName, customHandlers, options = {}) {
  let handlers = createDefaultActionHandlers(flagName, options)

  if (customHandlers) {
    handlers = {
      ...handlers,
      ...customHandlers,
    }
  }

  return {
    [action.pending]: handlers.pending,
    [action.fulfilled]: handlers.fulfilled,
    [action.rejected]: handlers.rejected,
  }
}
