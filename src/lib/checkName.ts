function checkName(name: string) {
  if (name === "" || /^[ ]+$/.test(name)) {
    return false;
  }
  return true;
}

export default checkName;
