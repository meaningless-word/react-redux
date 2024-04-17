// миддлвар - это всегда функция, возвращающая функцию, если только задачей миддлвара не является остановить выполнение цепочки кода
// поскольку миддлвар - это как работник корвейера: берет от предыдущего, дорабатывает и передаёт следующему
// миддлвару из библиотеки applyMiddleware доступны стор и функция некст (функция-обёртка), позволяющая продолжить выполнение цепочки

// /* вариант в стилистике ES5 */
// export function logging(store) {
//   return function (next) {
//     return function (action) {
//       console.log(123);
//       // обязательное условие, чтобы цепочка не прерывалась - возврат некста
//       return next(action);
//     };
//   };
// }

/* вариант в стилистике ES6 */
export const logging = (store) => (next) => (action) => {
  console.log(`Done ${action.type}`);
  return next(action);
};
