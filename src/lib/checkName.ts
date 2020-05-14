function checkName(name: string) {
  if (/^[ ]*$/.test(name)) {
    return false;
  }
  return true;
}

export default checkName;
