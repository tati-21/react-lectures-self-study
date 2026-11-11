//!=========================================

// const btnElem = document.querySelector('.js-btn') as HTMLButtonElement;
// const formElem = document.querySelector('.js-form') as HTMLFormElement;
// const ulElem = document.querySelector('.js-book-list') as HTMLUListElement;

// // моє: щоб TS не сварився на невикористані змінні (noUnusedLocals)
// console.log(btnElem.disabled, formElem.action, ulElem.children);

//!=========================================

// const formElem = document.querySelector('.js-form') as HTMLFormElement;

// formElem.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const borys = new FormData(formElem);

//   const data = {
//     title: borys.get('title') as string,
//     author: borys.get('author') as string,
//     age: Number(borys.get('age')),
//     isAdmin: Boolean(borys.get('isAdmin')),
//   };

//   // моє: щоб TS не сварився на невикористану змінну
//   console.log(data);

//   formElem.reset();
// });

//!=========================================
// const formElem = document.querySelector('.js-form') as HTMLFormElement;
// // у викладача ще ці два рядки з порожніми селекторами, далі не використовуються:
// // const btnElem = document.querySelector('') as HTMLButtonElement;
// // const ulElem = document.querySelector('') as HTMLUListElement;

// formElem.addEventListener('submit', handleFormSubmit);
// function handleFormSubmit(e: SubmitEvent) {
//   e.preventDefault();
//   const borys = new FormData(e.target as HTMLFormElement);

//   const data = {
//     title: borys.get('title') as string,
//     description: borys.get('description') as string,
//     category: borys.get('category') as string,
//     price: Number(borys.get('price')),
//   };

//   // моє: щоб TS не сварився на невикористану змінну
//   console.log(data);
// }

//!=========================================

// // моє: у викладача btnElem оголошений угорі файлу
// const btnElem = document.querySelector('.js-btn') as HTMLButtonElement;

// btnElem.addEventListener('click', handleBtnClick);
// function handleBtnClick(e: PointerEvent) {
//   // моє: у викладача функція порожня, а невикористаний e TS підкреслює (noUnusedParameters)
//   console.log(e.clientX, e.clientY);
// }

//!=========================================

// const elem = document.querySelector('.js-for-click') as
//   | HTMLButtonElement
//   | HTMLDivElement;

//!=========================================

// function showElem(elem: HTMLButtonElement | HTMLDivElement) {
//   elem.addEventListener('click', (e) => {
//     console.log('click');
//   });
// }

// // моє: виклик
// showElem(elem);
