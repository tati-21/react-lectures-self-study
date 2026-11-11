/*
 * Файл із практичними задачами заняття 1.2.
  ⚙️ Правила:
 *  - Розкоментовуй задачу, коли береш її в роботу.
 *  - Замінюй `unknown` і додавай типи там, де їх немає, щоб прибрати підкреслення.
 *  - Не використовуй `any` - шукай максимально точні типи.
 *  - Рядок «Перевірка» - що має вийти в консолі або що має підкреслитись.
 *  - Challenge 11, 15, 20 - задачі викладача; Extra 01-14 - мої (разом 17).
 *  - Events і Promises - додаткові: там код пишеш з нуля, заготовки немає.
 *  - Задачі з enum працюють, поки в tsconfig.json `erasableSyntaxOnly: false`.
 *    Перед комітом повертаємо `true`, тому їх тоді треба буде закоментувати.
 */

// Розкоментуй, коли дійдеш до Extra 12:
// import axios from 'axios';

/* 🧩 Challenge 11 - Functions
 * Типізуй виклик із повторними спробами:
 *  - `operation` - функція без параметрів, яка повертає значення будь-якого типу.
 *    Зроби `invokeWithRetry` узагальненою, щоб вона повертала той самий тип, що й `operation`.
 *  - `retries` - кількість повторів (число), `delay` - функція, яка отримує номер спроби
 *    і нічого не повертає. Обидва параметри необов'язкові.
 * Після уточнення типів прибери всі приведення `as`.
 * Перевірка: виведе 42, а наведи курсор на `answer` - тип number.
 */

// export const invokeWithRetry = <T>(
//   operation: () => T,
//   retries?: number,
//   delay?: (attempt: number) => void
// ): T => {
//   const maxAttempts = retries ?? 0;
//   let lastError: unknown = null;

//   for (let attempt = 0; attempt <= maxAttempts; attempt += 1) {
//     try {
//       return operation();
//     } catch (error) {
//       lastError = error;

//       if (attempt < maxAttempts && typeof delay === 'function') {
//         delay(attempt);
//       }
//     }
//   }

//   throw lastError;
// };

// const answer = invokeWithRetry(() => 42, 2);
// console.log(answer);

/* 🧩 Challenge 15 - Types
 * Створи узагальнений тип, який бере будь-який тип об'єкта і додає до нього два поля:
 *  - `createdAt` - дата, змінювати її після створення не можна;
 *  - `updatedAt` - дата, змінювати можна.
 * Перевірка: `note` без підкреслень, зміна `updatedAt` - без підкреслень,
 * а рядок зі зміною `createdAt` має підкреслитись.
 */
// export type WithTimestamp<TEntity> = TEntity & {
//   readonly createdAt: Date;
//   updatedAt: Date;
// };

// type Note = { text: string };

// export const note: WithTimestamp<Note> = {
//   text: 'Купити молоко',
//   createdAt: new Date(),
//   updatedAt: new Date(),
// };

// note.updatedAt = new Date();
// note.createdAt = new Date();

/* 🧩 Challenge 20 - Types
 * Опиши результат операції як об'єднання двох варіантів:
 *  - успіх: `{ ok: true; data: Success }`;
 *  - помилка: `{ ok: false; error: Failure }`.
 * Перевірка: `okResult` і `failResult` без підкреслень, `wrongResult` має підкреслитись.
 */

// export type Result<Success, Failure> =
//   | { ok: true; data: Success }
//   | { ok: false; error: Failure };

// export const okResult: Result<number, string> = { ok: true, data: 5 };
// export const failResult: Result<number, string> = {
//   ok: false,
//   error: 'Помилка',
// };
// export const wrongResult: Result<number, string> = {
//   ok: true,
//   error: 'Помилка',
// };

/* 🧩 Extra 01 - Enums
 * Створи рядковий enum `OrderStatus` зі станами замовлення:
 * New = 'new', Paid = 'paid', Shipped = 'shipped', Delivered = 'delivered'.
 * Заміни `unknown` у функції на точні типи.
 * Перевірка: виведе 'Оплачено'.
 */

// enum OrderStatus {
//   New = 'new',
//   Paid = 'paid',
//   Shipped = 'shipped',
//   Delivered = 'delivered',
// }

// export const getOrderLabel = (status: OrderStatus): string => {
//   switch (status) {
//     case OrderStatus.New:
//       return 'Нове';
//     case OrderStatus.Paid:
//       return 'Оплачено';
//     case OrderStatus.Shipped:
//       return 'Відправлено';
//     case OrderStatus.Delivered:
//       return 'Доставлено';
//   }
// };

// console.log(getOrderLabel(OrderStatus.Paid));

/* 🧩 Extra 02 - Enums
 * Створи enum `Priority` зі станами Low, Medium, High без значень (нехай TS пронумерує сам).
 * Заміни `unknown`: функція повертає true тільки для High.
 * Перевірка: перший рядок виведе 0 2, другий - true.
 */

// enum Priority {
//   Low,
//   Medium,
//   High,
// }

// export const isUrgent = (priority: Priority): boolean => {
//   return priority === Priority.High;
// };

// console.log(Priority.Low, Priority.High);
// console.log(isUrgent(Priority.High));

/* 🧩 Extra 03 - Enum чи union
 * Те саме, що в Extra 01, але без enum: опиши union-тип `PaymentMethod`,
 * у якому можуть бути лише рядки 'card' і 'cash'.
 * Перевірка: перший виклик виведе 'Готівка', а другий має підкреслитись.
 */

// type PaymentMethod = 'card' | 'cash';

// export const getPaymentLabel = (method: PaymentMethod): string => {
//   switch (method) {
//     case 'card':
//       return 'Карткою';
//     case 'cash':
//       return 'Готівка';
//   }
// };

// console.log(getPaymentLabel('cash'));
// console.log(getPaymentLabel('crypto'));

/* 🧩 Extra 04 - Generics
 * Функція повертає останній елемент масиву будь-якого типу.
 * Типізуй її так, щоб TS знав тип результату.
 * Перевірка: виведе 3 і 'b'; курсор на `lastNumber` - number, на `lastLetter` - string.
 */
// export const getLastElement = <TItem>(items: TItem[]): TItem => {
//   return items[items.length - 1];
// };

// const lastNumber = getLastElement([1, 2, 3]);
// const lastLetter = getLastElement(['a', 'b']);
// console.log(lastNumber, lastLetter);

/* 🧩 Extra 05 - Generics
 * Функція складає два значення різних типів у кортеж [ключ, значення].
 * Типізуй її двома узагальненими типами.
 * Перевірка: виведе ['age', 30]; курсор на `pair` - [string, number].
 */
// export const makePair = <T, U>(key: T, value: U): [T, U] => {
//   return [key, value];
// };

// const pair = makePair('age', 30);
// console.log(pair);

/* 🧩 Extra 06 - Generic interface
 * 1. Опиши інтерфейс `Product`: id - число, title - рядок, price - число.
 * 2. Опиши узагальнений інтерфейс `Paginated` для сторінки зі списком будь-чого:
 *    page - число, totalPages - число, items - масив елементів.
 * 3. Заміни `unknown` у `productsPage`.
 * Перевірка: виведе 'Торт'.
 */

// interface Product {
//   id: number;
//   title: string;
//   price: number;
// }

// interface Paginated<T> {
//   page: number;
//   totalPages: number;
//   items: T[];
// }

// export const productsPage: Paginated<Product> = {
//   page: 1,
//   totalPages: 3,
//   items: [
//     { id: 1, title: 'Торт', price: 350 },
//     { id: 2, title: 'Еклер', price: 60 },
//   ],
// };

// console.log(productsPage.items[0].title);

/* 🧩 Extra 07 - Generics + функція-параметр
 * Функція повертає тільки ті елементи масиву, для яких `check` повертає true.
 * Типізуй усі три місця з `unknown`: масив будь-якого типу,
 * `check` отримує один елемент цього масиву, результат - масив того ж типу.
 * Перевірка: виведе [60] (тільки дешеві товари).
 */
// export const filterBy = <T>(items: T[], check: (item: T) => boolean): T[] => {
//   const result = [];

//   for (const item of items) {
//     if (check(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// };

// const prices = [350, 60, 120];
// console.log(filterBy(prices, price => price < 100));

/* 🧩 Extra 08 - Promises
 * Функція повертає проміс, який через `ms` мілісекунд виконується з рядком 'Готово'.
 * Типізуй параметр і результат функції.
 * Перевірка: через секунду виведе 'Готово'.
 */
// export const delay = (ms: number): Promise<string> => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('Готово'), ms);
//   });
// };

// delay(1000).then(text => console.log(text));

/* 🧩 Extra 09 - Promises
 * Функція «завантажує» товар за id: через 500 мс проміс виконується з об'єктом товару.
 * Використай інтерфейс `Product` з Extra 06 і типізуй параметр і результат.
 * Перевірка: через пів секунди виведе 'Товар 1'.
 */
export const getProduct = id => {
  return new Promise(resolve => {
    setTimeout(
      () => resolve({ id, title: `Товар ${id}`, price: id * 100 }),
      500
    );
  });
};

getProduct(1).then(product => console.log(product.title));

/* 🧩 Extra 10 - Promises: помилки
 * 1. `checkStock`: якщо кількість більша за 0 - проміс виконується з цією кількістю,
 *    інакше відхиляється з помилкою 'Немає на складі'. Типізуй параметр і результат.
 * 2. `showStock`: прибери `any` з catch і звузь помилку, щоб можна було взяти `message`.
 * Перевірка: виведе 5, потім 'Немає на складі'.
 */
// export const checkStock = (quantity) => {
//   return new Promise((resolve, reject) => {
//     if (quantity > 0) {
//       resolve(quantity);
//     } else {
//       reject(new Error('Немає на складі'));
//     }
//   });
// };

// const showStock = async (quantity: number) => {
//   try {
//     const stock = await checkStock(quantity);
//     console.log(stock);
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };

// showStock(5);
// showStock(0);

/* 🧩 Extra 11 - async/await
 * Функція чекає два товари з Extra 09 і повертає суму їхніх цін.
 * Напиши тип результату функції.
 * Перевірка: виведе 300.
 */
// export const getTotal = async () => {
//   const first = await getProduct(1);
//   const second = await getProduct(2);
//   return first.price + second.price;
// };

// getTotal().then((total) => console.log(total));

/* 🧩 Extra 12 - axios
 * Розкоментуй імпорт axios угорі файлу.
 * 1. Опиши інтерфейс `Todo`: userId - число, id - число, title - рядок, completed - так/ні.
 * 2. Типізуй параметр, результат функції і запит, щоб `response.data` мав тип `Todo`.
 * Перевірка: виведе 'delectus aut autem'.
 */
// export const fetchTodo = async (id) => {
//   const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
//   return response.data;
// };

// fetchTodo(1).then((todo) => console.log(todo.title));

/* 🧩 Extra 13 - axios: список
 * Функція бере перші 5 задач. Типізуй запит і результат (використай `Todo` з Extra 12).
 * Перевірка: виведе 5.
 */
// export const fetchTodos = async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
//     params: { _limit: 5 },
//   });
//   return response.data;
// };

// fetchTodos().then((todos) => console.log(todos.length));

/* 🧩 Extra 14 - axios: створення
 * 1. Опиши інтерфейс `CreatePostBody`: title - рядок, body - рядок, userId - число.
 * 2. Опиши інтерфейс `Post`: усе те саме плюс id - число.
 * 3. Типізуй параметр, запит і результат функції.
 * Перевірка: виведе 101 (сервер дає новому посту id 101).
 */
// export const createPost = async (newPost) => {
//   const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
//   return response.data;
// };

// createPost({ title: 'Привіт', body: 'Мій перший пост', userId: 1 }).then((post) =>
//   console.log(post.id)
// );

/*
 * ===================== Додаткові: події =====================
 * Елементи вже є в index.html. Відкривай сторінку через `npm run dev`.
 */

/* 🧩 Events 01 - click
 * Лічильник: при кожному кліку по кнопці `.js-btn` у `.js-output` пиши 'Кліків: N'.
 * Перевірка: три кліки - на сторінці 'Кліків: 3'.
 */

/* 🧩 Events 02 - input
 * Поки пишеш у полі `.js-input`, заголовок `.js-title` показує текст великими літерами.
 * Якщо поле стерли до порожнього - заголовок знову 'Заняття 1.2'.
 * Обробник оголоси окремою функцією і типізуй її параметр.
 * Перевірка: вводиш 'торт' - заголовок 'ТОРТ', стираєш - 'Заняття 1.2'.
 */

/* 🧩 Events 03 - submit
 * Форма `.js-form` додає товар у список `.js-list`, як у блоці 5 файлу 06-dom-events.ts.
 * Але якщо назва порожня або ціна 0 чи менша - у список нічого не додавай,
 * а в `.js-output` напиши 'Заповни назву і ціну більше 0'.
 * Перевірка: порожня назва - повідомлення, 'Еклер' і 60 - новий рядок у списку.
 */

/*
 * ===================== Додаткові: проміси =====================
 */

/* 🧩 Promises 01 - new Promise + then/catch
 * Напиши функцію `loadUserName`, яка отримує id і повертає проміс з рядком:
 * через 500 мс для id 1 виконується з 'Alice', для інших id відхиляється
 * з помилкою 'Користувача не знайдено'. Виклич її двічі через then/catch.
 * Перевірка: виведе 'Alice' і 'Користувача не знайдено'.
 */

/* 🧩 Promises 02 - async/await
 * Ті самі два виклики `loadUserName` з Promises 01 зроби через async-функцію `showUser(id)`
 * з try/catch. Напиши тип результату `showUser` (подумай, що повертає async-функція без return).
 * Перевірка: той самий вивід, що в Promises 01.
 */
