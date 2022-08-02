// 防抖
export function debounce(fn, time=100) {
  let countDown = null;
  return (...args) => {
    if (countDown !== null) {
      clearTimeout(countDown); // 打断回城
    }
// 重新回城
    countDown = setTimeout(() => {
      fn.call(undefined, args); // 回城后调用 fn
      // countDown = null;
    }, time);
  };
}
