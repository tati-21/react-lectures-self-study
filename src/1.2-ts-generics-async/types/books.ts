export interface Book {
  _id: string;
  title: string;
  author: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetBooksResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Book[];
}

export interface GetBooksParams {
  page?: number;
  perPage?: number;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
  title: string;
  author: string;
  desc: string;
}

export interface CreateBookBody {
  title: string;
  author: string;
  desc: string;
}

export interface UpdateBookBody {
  title?: string;
  author?: string;
  desc?: string;
}
