/**
 * Типізація функцій: параметри, тип результату, void, опціональні параметри та значення за замовчуванням.
 */
//!======================================================
// сигнатури: задаємо типи параметрів і повернення; TS виводить їх з тіла, але явна анотація робить контракт явним.

// function myFn(x1: number, x2: number): number {
//   return (x1 * x2).toString();
// }

// type MyType = [number, string, boolean];
// function getArray(): MyType {
//   const x: MyType = [1, 'hello', true];
//   return x;
// }

// console.log(myFn(2, 3), getArray());
// myFn('2', 3);

//!=========================================

// type CalcFn = (x: number, y: number) => number;
// const sum: CalcFn = (x, y) => x + y;
// const mult: CalcFn = (x, y) => x * y;
// const dev: CalcFn = (x, y) => x / y;
// const diff: CalcFn = (x, y) => x - y;

// const concat: CalcFn = (x, y) => `${x}${y}`;

// console.log(sum(6, 2), mult(6, 2), dev(6, 2), diff(6, 2), concat(6, 2));

//!======================================================
// void/never: void для "нічого не повертає", never для "не завершується" (кидає помилку або нескінченний цикл).

// type Logger = (value: string) => void;

// const sayHello: Logger = value => {
//   console.log(value);
// };

// const parseError = (error: Error): never => {
//   if (error.message === '401') {
//     throw new Error('Користувач не авторизований');
//   }

//   if (error.message === '429') {
//     throw new Error('Дуже багато запитів. Спробуйте зачекати');
//   }

//   throw new Error('Невідома помилка');
// };

// sayHello('Hello');

// try {
//   parseError(new Error('401'));
// } catch (err) {
//   console.log(err);
// }

// const brokenNever = (): never => {
//   console.log('Я завершилась');
// };

// console.log(brokenNever);

//!======================================================
// optional/дефолти: параметр? або значення за замовчуванням у сигнатурі; перевіряти на undefined усередині.
//!======================================================

// function foo(x: number = 1, y: number = 0) {
//   console.log(x + y);
// }

// foo(10, 10);
// foo(10);
// foo();
// foo('10');

// function createColor(
//   red: number = 255,
//   green: number = 255,
//   blue: number = 255,
//   alpha: number = 1,
// ) {
//   const color = [red, green, blue, alpha];
//   return color;
// }

// console.log(createColor(15, 25, 30));

//!=========================================

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
//   city: string;
// }

// function showUser({ firstName, lastName, city, age }: User) {
//   console.log(firstName);
//   console.log(lastName);
//   console.log(age);
//   console.log(city);
// }

// showUser({ firstName: 'Vasya', lastName: 'Klopotenko', age: 25, city: 'Dnipro' });

// function showUserCountry({ firstName, country }: User) {
//   console.log(firstName, country);
// }

// showUserCountry({ firstName: 'Olena', lastName: 'Petrenko', age: 30, city: 'Lviv' });

//!======================================================
/* 🧩 Task 1 - типізація аргументів
 * Додай типи параметрам a і b так, щоб функція додавала два числа,
 * і вкажи тип того, що вона повертає.
 * Перевірка: add(2, 3) без підкреслень, add('2', 3) підкреслений.
 */
// export function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(2, 3));
// console.log(add('2', 3));

/* 🧩 Task 2 - void функція
 * Типізуй логер: він приймає рядок і нічого не повертає.
 * Перевірка: logMessage('Hello') без підкреслень, logMessage(25) підкреслений.
 */
export const logMessage = (message: string): void => {
  console.log('[LOG]', message);
};

// logMessage(25);

/* 🧩 Task 3 - optional параметр
 * Заміни any у UserRole на тип, який дозволяє лише ролі 'admin', 'user', 'guest'.
 * Типізуй параметри: name - рядок, role - UserRole, title - необов'язковий рядок.
  Перевірка: createUser('Ira', 'admin') і createUser('Ira', 'user', 'Dr')
  без підкреслень, createUser('Ira', 'boss') підкреслений.
 */

type UserRole = 'admin' | 'user' | 'guest';
export function createUser(name: string, role: UserRole, title?: string) {
  return { name, role, title: title ?? 'Mr/Ms' };
}

createUser('Ira', 'admin');
createUser('Ira', 'user', 'Dr');
// createUser('Ira', 'boss');

/* 🧩 Task 4 - never
 * Типізуй параметр message як рядок і вкажи, що функція ніколи не завершується нормально,
 * бо завжди кидає помилку.
 * Перевірка: у функції немає підкреслень.
 */
export function fail(message: string): never {
  throw new Error(message);
}
