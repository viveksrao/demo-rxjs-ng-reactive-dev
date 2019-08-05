export interface Book {
  id: number;
  bookName: string;
  bookCode?: string;
  description?: string;
  price?: number;
  categoryId?: number;
  category?: string;
  quantityInStock?: number;
  searchKey?: string[];
  publisherIds?:number[];
}
