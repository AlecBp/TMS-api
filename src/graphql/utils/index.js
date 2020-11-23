const getFieldsForUpdate = (args) => {
  const entries = Object.keys(args);
  const updates = {};

  // Get all keys that are not "id" and that have a value not equal to undefined
  for (let i = 0; i < entries.length; i++) {
    if (entries[i] !== "id") {
      if (Object.values(args)[i] !== undefined) {
        updates[entries[i]] = Object.values(args)[i];
      }
    }
  }

  return updates;
};

module.exports = { getFieldsForUpdate };
