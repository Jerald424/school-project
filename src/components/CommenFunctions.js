module.exports = {
  sortingascending(name, state, orderType) {
    if (orderType) {
      const sorted = [...state].sort((a, b) =>
        a[name.toLowerCase().localeCompare()] >
        b[name.toLowerCase().localeCompare()]
          ? 1
          : -1
      );
      return sorted;
    } else {
      const sorted = [...state].sort((a, b) =>
        a[name.toLowerCase().localeCompare()] <
        b[name.toLowerCase().localeCompare()]
          ? 1
          : -1
      );
      return sorted;
    }
  },
  groupingData(data, groupBy) {
    const result = data.reduce((acc, curr) => {
      acc[curr[groupBy]] = [...(acc[curr[groupBy]] || []), curr];
      return acc;
    }, {});
    return result;
  },
};
