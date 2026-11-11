/**
 * Моє: DOM і події з нуля (у курсі JS ця тема пропущена).
 *
 * План:
 * - DOM: що це і як знайти елемент.
 * - Зміна елемента з коду.
 * - Подія: що це, addEventListener, об'єкт події.
 * - Подія submit і форма.
 */

//!======================================================
// DOM - дерево елементів сторінки. Браузер читає index.html і з кожного тегу робить об'єкт.
// querySelector шукає елемент за CSS-селектором (як у стилях: .клас, #id, тег).

// const titleElem = document.querySelector('.js-title') as HTMLHeadingElement;

// console.log(titleElem.textContent); // "Заняття 1.2"

// titleElem.textContent = 'Привіт з TS';

//!======================================================
// Подія - щось, що сталося на сторінці: клік, введення тексту, відправка форми.
// addEventListener('подія', функція) - "коли станеться подія, виклич цю функцію".

// const btnElem = document.querySelector('.js-btn') as HTMLButtonElement;

// let clicks = 0;

// btnElem.addEventListener('click', () => {
//   clicks += 1;
//   btnElem.textContent = `Натиснуто: ${clicks}`;
// });

//!======================================================
// Об'єкт події (e): браузер сам передає у функцію об'єкт з деталями того, що сталося.
// Якщо функція окрема, тип e пишемо самі: для кліку - PointerEvent.

// const btnElem = document.querySelector('.js-btn') as HTMLButtonElement;

// function handleClick(e: PointerEvent) {
//   console.log(e.type); // "click"
//   console.log(e.clientX, e.clientY); // де саме на екрані клікнули
// }

// btnElem.addEventListener('click', handleClick);

//!======================================================
// Подія input: спрацьовує на кожен введений або стертий символ.
// value - те, що зараз написано в полі (завжди рядок).

// const inputElem = document.querySelector('.js-input') as HTMLInputElement;
// const outputElem = document.querySelector('.js-output') as HTMLParagraphElement;

// inputElem.addEventListener('input', () => {
//   outputElem.textContent = `Ти пишеш: ${inputElem.value}`;
// });

//!======================================================
// Подія submit: спрацьовує, коли форму відправили (кнопка type="submit" або Enter у полі).
// За замовчуванням браузер після цього перезавантажує сторінку - preventDefault це скасовує.
// FormData збирає значення всіх полів форми за їхніми name.

// const formElem = document.querySelector('.js-form') as HTMLFormElement;
// const listElem = document.querySelector('.js-list') as HTMLUListElement;

// function handleSubmit(e: SubmitEvent) {
//   e.preventDefault();

//   const formData = new FormData(formElem);
//   const title = formData.get('title') as string;
//   const price = Number(formData.get('price'));

//   listElem.insertAdjacentHTML('beforeend', `<li>${title} - ${price} грн</li>`);

//   formElem.reset();
// }

// formElem.addEventListener('submit', handleSubmit);
