/**
 * Власні типи: об'єднання (union), літеральні типи, перевірки типів (type guards).
 */
//!======================================================
// union: дозволяє кілька варіантів типу (number | string) без any.

// type UserAge = string | number;
// const age: UserAge = '25';
// const wrongAge: UserAge = true;

// type PhoneNumber = string | null;
// const phoneNumber: PhoneNumber = null;

// console.log(age, wrongAge, phoneNumber);

//!======================================================
// літеральні типи: обмежують значення до конкретних рядків/чисел, зручно для статусів/ролей.

// type InsertPosition = 'afterbegin' | 'beforebegin' | 'afterend' | 'beforeend';
// const position: InsertPosition = 'beforeEnd';

// type UserRole = 'student' | 'admin' | 'teacher';

// interface User {
//   firstName: string;
//   lastName: string;
//   role: UserRole;
// }

// const user: User = {
//   firstName: 'Vasya',
//   lastName: 'Vasylenko',
//   role: 'admin',
// };

// console.log(position, user);

//!======================================================
// type guards: перевірка typeof/Array.isArray/"prop" in звужує union до конкретного варіанта.

// function foo(userAge: string | number) {
//   userAge.toUpperCase();

//   if (typeof userAge === 'string') {
//     console.log(userAge.toUpperCase());
//   } else {
//     console.log(userAge.toFixed(1));
//   }
// }
// foo('25');
// foo(25);

// function foo(value: number[] | number) {
//   if (Array.isArray(value)) {
//     value.pop();
//   } else {
//     value.toFixed();
//   }
// }
// foo([1, 2, 3]);
// foo(2.5);

// interface Student {
//   firstName: string;
//   lastName: string;
//   phoneNumber?: string;
//   role: 'student';
// }

// interface Teacher {
//   firstName: string;
//   lastName: string;
//   phoneNumber?: string;
//   role: 'teacher';
//   salary: number;
// }

// type User = Student | Teacher;

// function showUserInfo(user: User) {
//   console.log(user.firstName);
//   console.log(user.lastName);
//   console.log(user.salary);

//   if (user.role === 'teacher') {
//     console.log(user.salary);
//   }

//   if ('salary' in user) {
//     console.log(user.salary);
//   }
// }

// showUserInfo({ firstName: 'Ira', lastName: 'Bondar', role: 'student' });
// showUserInfo({ firstName: 'Oleh', lastName: 'Koval', role: 'teacher', salary: 2000 });

//!======================================================
// доповнення з уроку GoIT "Власні типи": intersection (&) поєднує кілька типів в один.

// interface HttpResponse {
//   status: number;
//   message: string;
// }

// interface UserData {
//   id: number;
//   name: string;
//   email: string;
// }

// type UserResponse = HttpResponse & { data: UserData };

// const response: UserResponse = {
//   status: 200,
//   message: 'Success',
//   data: {
//     id: 1,
//     name: 'Alice',
//     email: 'alice@example.com',
//   },
// };

// const brokenResponse: UserResponse = {
//   status: 404,
//   data: {
//     id: 2,
//     name: 'Bob',
//     email: 'bob@example.com',
//   },
// };

// console.log(response.data.name, brokenResponse);

//!======================================================
/* 🧩 Task 1 - ідентифікатор
 * Заміни any на тип, який дозволяє і число, і рядок.
 * Функцію formatId не змінюй: вона вже обробляє обидва випадки.
 * Перевірка: у функції немає підкреслень, а виклик formatId(true) підкреслений.
 */
export type Identifier = string | number;
export const formatId = (id: Identifier) => {
  return typeof id === 'number' ? `#${id}` : id.toUpperCase();
};

// formatId(true);

/* 🧩 Task 2 - статуси замовлення
 * Заміни string на тип, який дозволяє лише ті статуси, що є у функції nextStatus.
 * Функцію nextStatus не змінюй.
 * Перевірка: у функції немає підкреслень, а виклик nextStatus('cancelled') підкреслений.
 */
export type OrderStatus = 'pending' | 'shipped' | 'done';
export const nextStatus = (status: OrderStatus): OrderStatus => {
  if (status === 'pending') return 'shipped';
  return 'done';
};

// nextStatus('canceled');
nextStatus('shipped');
