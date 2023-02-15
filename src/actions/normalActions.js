export function storeCapacityCountRow(data, expand) {
  return {
    type: "STORE_CAPACITY_COUNT_ROW",
    payload: {
      data,
      expand,
    },
  };
}

export function changeTheme(payload) {
  return { type: "CHANGE_THEME", payload };
}
