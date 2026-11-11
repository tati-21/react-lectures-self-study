/**
 * Типізація HTTP-запитів з Axios.
 *
 * План:
 * - Generics у axios.get/post для типізації даних.
 * - Опис контрактів відповіді (DTO) і вкладених полів.
 * - Типізація запитів: params/body, коди відповіді.
 * - Обробка помилок AxiosError (unknown -> звуження).
 * - Завдання: прибрати any/unknown, додати контракти для постів.
 */

// import axios from 'axios';
// // моє: у викладача імпортуються всі типи одразу, тут лише потрібні для блоку,
// // бо невикористані TS підкреслює (noUnusedLocals)
// import type { Book, UpdateBookBody } from './types/books';

//!======================================================
// axios.get<T> повертає Promise<AxiosResponse<T>>; data матиме тип T.

// export const getBooks = async (params: GetBooksParams) => {
//   const res = await axios.get<GetBooksResponse>('/books', { params });
//   return res.data;
// };

// export const createBook = async (body: CreateBookBody) => {
//   try {
//     const res = await axios.post<Book>('/books', body);
//     return res.data;
//   } catch (err) {
//     if (axios.isAxiosError(err)) {
//       console.log(err.code);
//     }
//   }
// };

// export const getBookById = async (bookId: string) => {
//   const res = await axios.get<Book>(`/books/${bookId}`);
//   return res.data;
// };

// export const replaceBook = async (bookId: string, body: CreateBookBody) => {
//   const res = await axios.put<Book>(`/books/${bookId}`, body);
//   return res.data;
// };

// export const updateBook = async (bookId: string, body: UpdateBookBody) => {
//   const res = await axios.patch<Book>(`/books/${bookId}`, body);
//   return res.data;
// };

// export const deleteBookById = async (bookId: string) => {
//   const res = await axios.delete<null>(`/books/${bookId}`);
//   return res.data;
// };

// // моє: виклики з пояснення
// updateBook('42', { title: 'Kobzar 2' });
// deleteBookById('42');
