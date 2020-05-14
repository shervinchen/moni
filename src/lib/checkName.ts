function checkName (name: string) {
  if (name === '') {
    return false
  }
  if (name) {
    if (/^[ ]+$/.test(name)) {
      return false
    }
    return true
  }
}

export default checkName
