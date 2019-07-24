import { Book } from "./book";
export class BookData {
  static books: Book[] = [
    {
      id: 1,
      bookName: 'Everyday Information Architecture',
      bookCode: 'EIA-0011',
      description: 'Leverage the principles and practices of information architecture',
      price: 14.00,
      categoryId: 1,
      quantityInStock: 15,
      publisherIds: [1,2]
    },
    {
      id: 2,
      bookName: 'Progressive Web Apps',
      bookCode: 'PWA-0023',
      description: 'The what, why, and how of progressive web apps',
      price: 14.00,
      categoryId: 1,
      quantityInStock: 2,
      publisherIds: [3,4]
    },
    {
      id: 5,
      bookName: 'ECMAScript Cookbook',
      bookCode: 'ECMA-0048',
      description: 'Produce more efficient, expressive, and simpler programs',
      price: 32.00,
      categoryId: 3,
      quantityInStock: 8,
      publisherIds: [5,6]
    },
    {
      id: 8,
      bookName: 'Expert AWS Development',
      bookCode: 'AWS-0022',
      description: 'Effectively build, deploy, and manage applications on AWS',
      price: 36.00,
      categoryId: 3,
      quantityInStock: 6,
      publisherIds: [7,8]
    },
    {
      id: 10,
      bookName: 'Customizing WordPress',
      bookCode: 'CWP-0042',
      description: 'WordPress makes it perfect for customization',
      price: 4.00,
      categoryId: 5,
      quantityInStock: 12,
      publisherIds: [9,10]
    }
  ];
}
