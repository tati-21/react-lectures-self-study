/**
 * Типізація промісів і async/await.
 *
 * План:
 * - Основи Promise<T> і тип результату.
 * - Обробка помилок: reject, try/catch, Promise.reject.
 * - async/await: інференція типів, повернення промісів.
 * - Паралельні запити: Promise.all / Promise.allSettled.
 * - Завдання: переписати функції з any/unknown на точні типи.
 */

// import axios, { Axios, AxiosError } from 'axios';
// моє: без Axios, бо він тут не використовується і TS підкреслює (noUnusedLocals)
// import axios, { AxiosError } from 'axios';

//!======================================================
// Promise<T>: типізуємо значення, яке буде доступне в then/await, уникаємо any.

// function convertToPromise<T>(value: T): Promise<T> {
//   const promise = Promise.resolve(value);
//   return promise;
// }
// const res1 = convertToPromise(25);

// // моє: щоб TS не сварився на невикористану змінну (noUnusedLocals)
// res1.then((value) => console.log(value));

//!======================================================
// Помилки: відловлюємо через catch/try-catch, бажано типізувати помилки (unknown) і звужувати.

// async function getPokemon() {
//   try {
//     const pokemon = await axios.get('');
//     // моє: щоб TS не сварився на невикористану змінну
//     console.log(pokemon);
//   } catch (err) {
//     const error = err as AxiosError;
//     console.log(error.code);
//     console.log(error.message);
//   }
// }

// // моє: виклик, щоб TS не сварився на невикористану функцію
// getPokemon();

//!=========================================

// const btnElem = document.querySelector('.js-btn') as HTMLButtonElement;

// // моє: щоб TS не сварився на невикористану змінну
// console.log(btnElem);

// у викладача недописано (після as немає типу), тому закоментовано:
// type UserAge = string | number;
// function showUserAgeForString(age: UserAge){
//   const str = age as ;
// }

//!======================================================
// async/await: async-функція завжди повертає Promise; тип результату виводиться з return.

// const getPokemon = async () => {
//   return [10, 20, 30];
// };

// // моє: виклик, щоб TS не сварився на невикористану функцію
// getPokemon().then((numbers) => console.log(numbers));

//!======================================================
// доповнення з уроку GoIT "Типізація промісів": тип промісу вказуємо самі.

// interface User {
//   id: number;
//   name: string;
// }

// const getUser = (): Promise<User> => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ id: 1, name: 'Alice' }), 1000);
//   });
// };

// getUser().then((user) => console.log(user.name)); // "Alice"
