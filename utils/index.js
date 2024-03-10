export function formatNumber(x) {
  return new Intl.NumberFormat().format(x);
}
export function ArrToObjGroupByKey(arr, key = "id") {
  return arr?.reduce((acc, cur) => {
    if (!acc[cur[key]]) acc[cur[key]] = [];
    acc[cur[key]].push(cur);
    return acc;
  }, {});
}
