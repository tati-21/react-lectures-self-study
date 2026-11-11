/**
 * Узагальнені типи (generics)
 *
 * План:
 * - Навіщо generics: повторне використання з різними типами.
 * - Параметри типів <T>, кілька параметрів <T, U>.
 * - Обмеження (extends) для властивостей/методів.
 * - Інференція типів для generic-функцій і колбеків.
 * - Завдання: переписати функції з any/unknown на generics з обмеженнями.
 */

//!======================================================
// generics дозволяють писати одну функцію для різних типів без any, зберігаючи підказки.

// function getFirstEl<T1>(arr: T1[]) {
//   return arr[0];
// }

// getFirstEl<number>([10, 20, 30, 40]);
// getFirstEl<string>(['hello', 'world']);
// getFirstEl<boolean>([true, false, false, true]);
// getFirstEl([10, 20, 30, 40]);

//!======================================================
// обмеження: <T extends { id: number }> гарантує наявність id; зручно для фільтрів і пошуку.

// function getLength<T extends { length: number }>(value: T) {
//   return value.length;
// }

// getLength('Hello');
// getLength([1, 2, 3, 4]);
// getLength([true, false]);
// getLength(25);

//!=========================================

// function showFullName<T extends { firstName: string; lastName: string }>(
//   user: T,
// ) {
//   console.log(user.firstName, user.lastName);
// }

// const student = {
//   firstName: 'Vasya',
//   lastName: 'Vasylenko',
//   age: 25,
// };

// const teacher = {
//   firstName: 'Vasya',
//   lastName: 'Vasylenko',
//   age: 25,
//   salary: 5000,
// };

// showFullName(student);
// showFullName(teacher);

//!======================================================
// доповнення з уроку GoIT "Узагальнені типи (generics)":
// generics у відповідях API - один інтерфейс для різних даних у data.

// interface ApiResponse<T> {
//   data: T;
//   status: number;
// }

// const userResponse: ApiResponse<{ id: number; name: string }> = {
//   data: {
//     id: 1,
//     name: 'Alice',
//   },
//   status: 200,
// };

// const invoiceResponse: ApiResponse<{ email: string; amount: number }> = {
//   data: {
//     email: 'alice@mail.com',
//     amount: 150,
//   },
//   status: 201,
// };

// // моє: виклики, щоб TS не сварився на невикористані змінні (noUnusedLocals)
// console.log(userResponse, invoiceResponse);

//!======================================================
/* 🧩 Task 1 - перший елемент
 * Заміни any/unknown на generics і додай обмеження, якщо треба.
 */
// export function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }

/* 🧩 Task 2 - перемішування
 * Типізуй shuffle так, щоб зберігався тип елементів без any.
 */
// export function shuffle<T>(array: T[]): T[] {
//   return array.sort(() => Math.random() - 0.5);
// }

/* 🧩 Task 3 - сховище
 * Використай generics для збереження/завантаження без кастів.
 */

// export function saveToStorage<T>(key: string, value: T) {
//   localStorage.setItem(key, JSON.stringify(value));
// }
// saveToStorage('admin', { name: 'Vasya' });
// saveToStorage('balance', 0);
// saveToStorage('isAdmin', true);

//!=========================================

// // моє: у викладача User не оголошений у цьому файлі
// interface User {
//   name: string;
// }

// export function loadFromStorage<T>(key: string): T | null {
//   const item = localStorage.getItem(key);
//   if (item !== null) {
//     return JSON.parse(item);
//   }
//   return null;
// }
// const isAdmin = loadFromStorage('isAdmin');
// const user = loadFromStorage<User>('user');

// // моє: щоб TS не сварився на невикористані змінні (noUnusedLocals)
// console.log(isAdmin, user);

//!=========================================

/* 🧩 Task 4 - max за селектором
 * Додай generics та обмеження для selector, щоб не втратити тип елемента.
 * (у викладача не розв'язана, рішення моє)
 */
// export function max<T>(array: T[], selector: (item: T) => number): T {
//   return array.reduce((prev, curr) =>
//     selector(curr) > selector(prev) ? curr : prev,
//   );
// }
