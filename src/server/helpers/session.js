export const save = (session, obj) => {
  Object.assign(session, obj)
}

// save if not exists
export const saveNX = (session, obj) => {
  Object.keys(obj).forEach((key) => {
    if (session[key] !== undefined) {
      session[key] = obj[key]
    }
  })
}
