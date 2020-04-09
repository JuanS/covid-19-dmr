const CalculateFactor = (data, pos, days) => {
  const { length } = data;
  let factor = -1;

  if (length >= days) {
    const start = data[pos - days];
    const end = data[pos - 1];
    factor = end.deaths / start.deaths;
  }

  return factor;
};

export { CalculateFactor };