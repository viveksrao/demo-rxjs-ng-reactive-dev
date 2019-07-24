export interface Book {
  id: number;
  bookName: string;
  bookCode?: string;
  description?: string;
  price?: number;
  categoryId?: number;
  quantityInStock?: number;
  searchKey?: string[];
  publisherIds?:number[];
}
