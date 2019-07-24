import { BookCategory } from "./book-category";
export class BookCategoryData {
  static categories: BookCategory[] = [
    {
      id: 1,
      name: 'Web Development',
      description: 'Become a well-versed web developer. Learn how to use PHP, MySQL, HTML, CSS, and JavaScript frameworks to build robust websites and applications, complete with ecommerce, database integration, and forms.'
    },
    {
      id: 3,
      name: 'Software Development',
      description: 'Grow your software development skills and reap the benefits for the rest of your career. Learn the fundamentals of software programming, software security, and object-oriented design.'
    },
    {
      id: 5,
      name: 'Data Science',
      description: 'Data science is one of todays top careers. Get the training you need to get ahead—or stay on top—in fields such as data analysis, mining, visualization, and big data, using tools like Excel, R, Hadoop, and Python.'
    }
  ]
}
