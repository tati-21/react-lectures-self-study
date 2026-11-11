/**
 * Перелічення (enum) та літеральні об'єднання.
 *
 * План:
 * - Коли обрати union замість enum, а коли enum корисний.
 * - Строкові vs числові enum-и, автонумерація.
 * - Підказки й захист від опечаток завдяки літералам.
 * - Завдання: оголосити статуси, коди відповіді та ролі користувача.
 */

//!======================================================
// union vs enum:
// union простіший і не генерує додатковий код;
// enum додає рантайм-об'єкт і зручний, коли потрібні посилання в JS-коді.

// type Role = 'Admin' | 'Teacher' | 'Student';

// interface User {
//   name: string;
//   role: Role;
// }

// const user: User = {
//   name: 'Vasya',
//   role: 'Student',
// };

// function showInfo(user: User) {
//   if (user.role === 'Admin') {
//     console.log('This is Admin');
//   }

//   if (user.role === 'Student') {
//     console.log('This is student');
//   }

//   if (user.role === 'Teacher') {
//     console.log('This is teacher');
//   }
// }

// function isAdmin(user: User) {
//   return user.role === 'admin';
// }

// // моє: виклики, щоб TS не сварився на невикористані змінні (noUnusedLocals)
// showInfo(user);
// console.log(isAdmin(user));

//!=========================================
// enum Role {
//   Admin = 'Admin',
//   Teacher = 'Teacher',
//   Student = 'Student',
// }

// interface User {
//   name: string;
//   role: Role;
// }

// const user: User = {
//   name: 'Vasya',
//   role: Role.Student,
// };

// function showInfo(user: User) {
//   if (user.role === Role.Admin) {
//     console.log('This is Admin');
//   }

//   if (user.role === Role.Student) {
//     console.log('This is student');
//   }

//   if (user.role === Role.Teacher) {
//     console.log('This is teacher');
//   }
// }

// function isAdmin(user: User) {
//   return user.role === Role.Admin;
// }

// console.log(Role);

// // моє: виклики, щоб TS не сварився на невикористані змінні (noUnusedLocals)
// showInfo(user);
// console.log(isAdmin(user));

//!======================================================
// string vs number enums: рядкові уникають зворотного мапінгу; числові можуть автонумерувати, але вимагають обережності.

// type ServerResponse = 200 | 201 | 400 | 404 | 429 | 409 | 500;

// enum ServerResponse {
//   Success = 200,
//   CreatedElement = 201,
//   UserError = 400,
//   NotFound = 404,
//   NotAuthorized = 401,
//   InvalidCredentials = 409,
//   ServerError = 500,
// }

// const serverCodes = Object.values(ServerResponse);
// console.log(serverCodes);

// function checkServerResponse(response: ServerResponse) {
//   if (response === ServerResponse.Success) {
//   } else if (response === ServerResponse.CreatedElement) {
//   } else if (response === ServerResponse.UserError) {
//   } else if (response === ServerResponse.NotFound) {
//   } else if (response === ServerResponse.NotAuthorized) {
//   } else if (response === ServerResponse.InvalidCredentials) {
//   } else if (response === ServerResponse.ServerError) {
//   }
// }

// // моє: виклик, щоб TS не сварився на невикористану функцію (noUnusedLocals)
// checkServerResponse(ServerResponse.NotFound);

//!======================================================
// доповнення з уроку GoIT "Перелічення (enum)": автонумерація.
// Назви enum - з великої літери, значення - PascalCase або UPPER_CASE.

// enum Status {
//   Loading,
//   Success,
//   Error,
// }

// let requestStatus: Status = Status.Loading;
// console.log(requestStatus); // 0

// // моє: подивитись, який об'єкт TS збудував
// console.log(Status);
// requestStatus = Status.Error;
// console.log(requestStatus);

//!======================================================
// доповнення з уроку GoIT "Перелічення (enum)": enum чи union?
// enum - якщо значення треба перебирати (Object.values), є чіткі асоціації (Success = 200),
//        великий проєкт, сторонні API, константи (ролі, статуси замовлення).
// union - прості ситуації, обмежений набір значень, які ніколи не змінюються.
// Не знаєш, що обрати - починай з union. Enum - лише коли є реальна потреба.

// enum Role {
//   Admin = 'ADMIN',
//   User = 'USER',
//   Guest = 'GUEST',
// }

// const getRoleName = (role: Role) => {
//   return `Your role is: ${role}`;
// };

// console.log(getRoleName(Role.Admin)); // "Your role is: ADMIN"

// type Status = 'loading' | 'success' | 'error';

// const getStatusMessage = (status: Status) => {
//   return `Current status: ${status}`;
// };

// console.log(getStatusMessage('loading')); // "Current status: loading"

//!======================================================
/* 🧩 Task 1 - статуси запиту
 * Заміни any на тип, який дозволяє лише 'pending', 'fulfilled', 'rejected'.
 * Перевірка: зміни значення на 'done' - TS має підкреслити.
 */
// type Status = 'pending' | 'fulfilled' | 'rejected';
// export const requestStatus: Status = 'pending';

/* 🧩 Task 2 - коди відповіді
 * Опиши або union чисел, або enum з кодами 200/201/400/500.
 * Зараз тип надто широкий.
 */

// enum ServerResponse {
//   Test = 'awdawd',
//   Success = 200,
//   UserError = 400,
//   ServerError = 500,
// }

// console.log(ServerResponse);

// export const requestCode: ServerResponse = ServerResponse.Success;

/* 🧩 Task 3 - ролі користувача
 * Заміни any на тип з ролями 'admin', 'user', 'guest' і постав його полю role замість unknown.
 * Перевірка: зміни роль на 'owner' - TS має підкреслити.
 */
// export type Role = 'admin' | 'user' | 'guest';

// export interface User {
//   username: string;
//   role: Role;
// }

// export const currentUser: User = {
//   username: 'jacob',
//   role: 'admin',
// };
