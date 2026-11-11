/*
 * Файл із практичними задачами на типізацію.
  ⚙️ Правила:
 *  - Усі приклади перемішані в довільному порядку.
 *  - Для кожної теми з попередніх файлів є декілька задач.
 *  - Замінюй `unknown` і додавай типи там, де їх немає, щоб прибрати підкреслення.
 *  - Не використовуй `any` - шукай максимально точні типи.
 *  - Виконуй задачі поступово та перевіряй, що TypeScript не сигналізує про помилки.
 *  - Нумерація викладача: задачі 09 у нього немає, задачі 11, 15, 20 будуть після заняття 1.2.
 */

/* 🧩 Challenge 01 - Functions
 * Додай типи параметрам (обидва - числа) і тип результату.
 */
// export const calculateScore = (
//   points: number,
//   bonusMultiplier: number
// ): number => {
//   return points * bonusMultiplier;
// };

// console.log(calculateScore(9, 2));

/* 🧩 Challenge 02 - Objects
 * Опиши тип для знімка сесії з вкладеним об'єктом `metadata` і заміни ним `unknown`.
 * `roles` - масив, у якому можуть бути лише 'admin' і 'editor', а не будь-які рядки.
 * Підказка: для дати є вбудований тип `Date`, як `Error` для помилки.
 */

// type Role = 'admin' | 'editor';

// interface Metadata {
//   ip: string;
//   roles: Role[];
// }

// interface SessionSnapshot {
//   userId: number;
//   token: string;
//   expiresAt: Date;
//   metadata: Metadata;
// }

// export const sessionSnapshot: SessionSnapshot = {
//   userId: 501,
//   token: 'abc123',
//   expiresAt: new Date(),
//   metadata: {
//     ip: '127.0.0.1',
//     roles: ['admin', 'editor'],
//   },
// };

/* 🧩 Challenge 03 - Primitives
 * Заміни `unknown` на правильний простий тип.
 */
// export const currencyCode: string = 'UAH';

/* 🧩 Challenge 04 - Types
 * Заміни `string` на тип, який дозволяє лише стани завантаження
 * 'idle', 'loading', 'success', 'error'.
 */
// export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

/* 🧩 Challenge 05 - Arrays
 * Заміни `unknown` на масив чисел.
 * Додатково: зроби масив незмінним (`readonly` перед типом масиву), щоб не можна було зробити push.
 */
// export const temperatureHistory: readonly number[] = [18.6, 17.4, 19.1, 20];

/* 🧩 Challenge 06 - Functions
 * Додай типи параметрам і результату.
 * `locale` може бути лише 'ua' або 'en'.
 */
// export const formatUserName = (
//   firstName: string,
//   lastName: string,
//   locale: 'ua' | 'en'
// ): string => {
//   const fullName = `${firstName} ${lastName}`.trim();
//   return locale === 'ua' ? `Привіт, ${fullName}` : `Hello, ${fullName}`;
// };

/* 🧩 Challenge 07 - Primitives
 * Заміни `unknown` на правильний простий тип (це кількість запитів на день).
 */
// export const maxDailyRequests: number = 1000;

/* 🧩 Challenge 08 - Objects
 * Опиши тип налаштування перемикача функції (feature toggle) і заміни ним `unknown`.
 * Додай `readonly` полям, які не мають змінюватись після створення (ключ, id).
 */

// interface FeatureToggle {
//   readonly key: string;
//   enabled: boolean;
//   rolloutPercentage: number;
//   lastUpdatedBy: {
//     readonly id: number;
//     name: string;
//   };
// }

// export const featureToggle: FeatureToggle = {
//   key: 'beta-layout',
//   enabled: true,
//   rolloutPercentage: 0.4,
//   lastUpdatedBy: {
//     id: 7,
//     name: 'TeamLead',
//   },
// };

/* 🧩 Challenge 10 - Arrays
 * Заміни `unknown` на тип матриці оцінок: масив, у якому кожен елемент -
 * кортеж рівно з трьох чисел.
 */

// type RatingRow = [number, number, number];

// export const ratingMatrix: RatingRow[] = [
//   [4, 5, 3],
//   [5, 5, 5],
//   [3, 4, 4],
// ];

/* 🧩 Challenge 12 - Primitives
 * Заміни `unknown` на правильний простий тип.
 * Окремого типу «один символ» у TS немає.
 */
// export const initialLetter: string = 'T';

/* 🧩 Challenge 13 - Objects
 * Опиши тип фільтрів звіту і заміни ним `unknown`.
 * Період (`from`, `to`) опиши окремим типом.
 * `statuses` - масив, у якому можуть бути лише 'pending', 'approved', 'rejected'.
 */

// type ReportStatus = 'pending' | 'approved' | 'rejected';

// interface ReportPeriod {
//   from: Date;
//   to: Date;
// }

// interface ReportFilters {
//   period: ReportPeriod;
//   includeInactive: boolean;
//   statuses: ReportStatus[];
// }

// export const reportFilters: ReportFilters = {
//   period: {
//     from: new Date('2024-01-01'),
//     to: new Date('2024-06-30'),
//   },
//   includeInactive: false,
//   statuses: ['pending', 'approved'],
// };

/* 🧩 Challenge 14 - Arrays
 * Опиши тип однієї задачі в черзі і заміни `unknown` на масив таких задач.
 * Зверни увагу: виконавця (`assignee`) може й не бути.
 */

// interface BacklogTask {
//   id: string;
//   blocked: boolean;
//   assignee: string | null;
// }

// export const backlogQueue: BacklogTask[] = [
//   { id: 'PLN-1', blocked: false, assignee: 'Oleh' },
//   { id: 'BUG-14', blocked: true, assignee: null },
//   { id: 'DOC-3', blocked: false, assignee: 'Iryna' },
// ];

/* 🧩 Challenge 16 - Functions
 * Фабрика логерів. Заміни `unknown`: `makePrefix` - функція без параметрів, яка повертає рядок,
 * `message` - рядок. Після цього прибери `as () => string` і `String(...)`, вони стануть зайві.
 */

// interface LoggerMethods {
//   info: (message: string) => void;
//   error: (message: string) => void;
// }

// export const createLogger = (makePrefix: () => string): LoggerMethods => {
//   return {
//     info(message) {
//       console.log(`${makePrefix()} ${message}`);
//     },
//     error(message) {
//       console.error(`${makePrefix()} ${message}`);
//     },
//   };
// };

// ! =======================================================

// interface CupWriter {
//   small: (drink: string) => void;
//   big: (drink: string) => void;
// }

// export const createCupWriter = (getName: () => string): CupWriter => {
//   return {
//     small(drink: string) {
//       console.log(`${getName()}: small ${drink}`);
//     },
//     big(drink: string) {
//       console.log(`${getName()}: big ${drink}`);
//     },
//   };
// };

// const writer = createCupWriter(() => 'Olia');
// writer.small('latte');
// writer.big('cocoa');

// ! =======================================================

/* 🧩 Challenge 17 - Primitives
 * Заміни `unknown` на тип для прапорця «чи пускати гостей».
 * Значення може бути ще не задане (`undefined`).
 */

// export let allowGuests: boolean | undefined = false;

/* 🧩 Challenge 18 - Objects
 * Опиши тип чернетки рахунку (invoice) і заміни ним `unknown`.
 * Окремі типи для клієнта і для одного рядка `items`.
 * `currency` може бути лише 'UAH', 'USD' або 'EUR'.
 */

// type Currency = 'UAH' | 'USD' | 'EUR';

// interface Customer {
//   name: string;
//   taxId: string;
// }
// interface InvoiceItem {
//   sku: string;
//   quantity: number;
//   price: number;
// }

// interface Invoice {
//   invoiceId: string;
//   customer: Customer;
//   items: InvoiceItem[];
//   currency: Currency;
//   paid: boolean;
// }

// export const draftInvoice: Invoice = {
//   invoiceId: 'INV-9001',
//   customer: {
//     name: 'Acme Corp',
//     taxId: 'UA1234567890',
//   },
//   items: [
//     { sku: 'TS-45', quantity: 3, price: 780 },
//     { sku: 'SUP-12', quantity: 1, price: 2200 },
//   ],
//   currency: 'UAH',
//   paid: false,
// };

/* 🧩 Challenge 19 - Arrays
 * Заміни `unknown` на кортеж: [назва, кількість спроб, активність].
 */

// export const editableTuple: [string, number, boolean] = ['autosave', 3, true];

// ! =======================================================
// ! Додаткові задачі: фабрики, кортежі, повторення
// ! =======================================================

/* 🧩 Extra 01 - Functions (фабрика)
 * Заміни `unknown`: `getTime` - функція без параметрів, яка повертає рядок, `text` - рядок.
 * Опиши інтерфейс для об'єкта, який повертає `createNotifier`, і постав його типом результату.
 * Перевірка: прибери з `return` метод `warning` - TS має підкреслити, що його не вистачає.
 */

// interface NotifierMethods {
//   success: (text: string) => void;
//   warning: (text: string) => void;
// }

// export const createNotifier = (getTime: () => string): NotifierMethods => {
//   return {
//     success(text) {
//       console.log(`${getTime()} OK: ${text}`);
//     },
//     warning(text) {
//       console.warn(`${getTime()} WARNING: ${text}`);
//     },
//   };
// };

/* 🧩 Extra 02 - Functions (фабрика)
 * Кошик зі знижкою. `getDiscount` - функція без параметрів, яка повертає число (0.1 = 10%).
 * Опиши інтерфейс кошика: `add` приймає ціну і нічого не повертає, `total` без параметрів повертає число.
 * Перевірка: `createCart(() => 0.1).add('100')` - TS має підкреслити `'100'`.
 */

// interface Cart {
//   add: (price: number) => void;
//   total: () => number;
// }

// export const createCart = (getDiscount: () => number): Cart => {
//   let sum = 0;
//   return {
//     add(price) {
//       sum += price;
//     },
//     total() {
//       return sum - sum * getDiscount();
//     },
//   };
// };

/* 🧩 Extra 03 - Functions (фабрика)
 * Фільтр слів. Тут функція-параметр уже З параметром: `isAllowed` приймає слово (рядок)
 * і повертає `true` або `false`.
 * `check` повертає лише 'ok' або 'blocked' - винеси це окремим типом.
 * `countAllowed` приймає масив слів і повертає число.
 * Опиши інтерфейс фільтра і постав його типом результату.
 * Перевірка: зміни в `check` 'blocked' на 'denied' - TS має підкреслити.
 */

// type CheckStatus = 'ok' | 'blocked';

// type IsAllowedFn = (word: string) => boolean;

// interface WordFilter {
//   check: (word: string) => CheckStatus;
//   countAllowed: (words: string[]) => number;
// }

// export const createWordFilter = (isAllowed: IsAllowedFn): WordFilter => {
//   return {
//     check(word) {
//       return isAllowed(word) ? 'ok' : 'blocked';
//     },
//     countAllowed(words) {
//       return words.filter(isAllowed).length;
//     },
//   };
// };

/* 🧩 Extra 04 - Tuples
 * Функція повертає пару [найменше, найбільше]. Заміни `unknown`: параметр - масив чисел,
 * результат - кортеж з двох чисел.
 * Перевірка: наведи мишкою на `minMax` - має бути кортеж, а не `number[]`.
 * Потім допиши в `return` третє число - TS має підкреслити.
 */

// export const getMinMax = (numbers: number[]): [number, number] => {
//   return [Math.min(...numbers), Math.max(...numbers)];
// };
// const minMax = getMinMax([7, 2, 9]);
// console.log(minMax);

/* 🧩 Extra 05 - Tuples
 * Код і текст відповіді сервера. Заміни `unknown` на кортеж [число, рядок]
 * і зроби його незмінним.
 * Перевірка: `notFound.push(500);` і `notFound[0] = 200;` - TS має підкреслити обидва.
 */
// export const notFound: readonly [number, string] = [404, 'Not Found'];

/* 🧩 Extra 06 - Tuples
 * Список команди: кожен елемент - кортеж [ім'я, статус], статус лише 'online' або 'offline'.
 * Окремий тип для статусу, окремий для одного учасника, а `team` - масив учасників.
 * Перевірка: зміни 'offline' на 'away' - TS має підкреслити.
 */
// type ActivityStatus = 'online' | 'offline';
// type TeamMember = [name: string, status: ActivityStatus];

// export const team: TeamMember[] = [
//   ['Ira', 'online'],
//   ['Oleh', 'offline'],
//   ['Max', 'online'],
// ];

/* 🧩 Extra 07 - Objects (повторення)
 * Опиши тип профілю і заміни ним `unknown`.
 * - `id` не має змінюватись після створення.
 * - `address` опиши окремим типом.
 * - `avatar` - рядок, але його свідомо поставили порожнім (подивись, яке значення стоїть).
 * - `bio` - рядок, якого в цьому об'єкті немає взагалі, але в інших профілях він може бути.
 * - Імена типів: з великої літери, тип одного елемента називається в однині.
 * Перевірка: `userProfile.id = 5;` - TS має підкреслити. Допиши в об'єкт `bio: 'hi'` - TS має пропустити.
 */

// interface Address {
//   city: string;
//   zip: string;
// }

// interface UserProfile {
//   readonly id: number;
//   nickname: string;
//   avatar: null | string;
//   address: Address;
//   tags: string[];
//   bio?: string;
// }

// export const userProfile: UserProfile = {
//   id: 12,
//   nickname: 'tati',
//   avatar: null,
//   address: {
//     city: 'Warsaw',
//     zip: '00-001',
//   },
//   tags: ['react', 'ts'],
//   bio: 'hi',
// };

// // userProfile.id = 5;
