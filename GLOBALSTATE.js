const globalState = { saved: [] };

module.exports = StoreGlobal = obj => {
  if (obj.type === "set") {
    globalState[obj.key] = obj.value;
    return true;
  } else if (obj.type === "get") {
    return globalState[obj.key];
  } else {
    return null;
  }
};
