import { Publisher } from "./publisher";
export class PublisherData {
  static publishers: Publisher[] = [
    {
      id: 1,
      name: 'A Book Apart',
      cost: 16.95,
      minQuantity: 12
    },
    {
      id: 2,
      name: 'Packt Publishing',
      cost: 15.95,
      minQuantity: 24
    },
    {
      id: 3,
      name: 'Smashing Magazine',
      cost: 12,
      minQuantity: 6
    },
    {
      id: 4,
      name: 'Wiley',
      cost: 25,
      minQuantity: 2
    },
    {
      id: 5,
      name: 'McGraw-Hill Education',
      cost: 2,
      minQuantity: 24
    },
    {
      id: 6,
      name: 'Cengage',
      cost: 4,
      minQuantity: 12
    },
    {
      id: 7,
      name: 'Oxford University Press',
      cost: 8,
      minQuantity: 8
    },
    {
      id: 8,
      name: 'Pearson Education',
      cost: 4,
      minQuantity: 12
    },
    {
      id: 9,
      name: 'Macmillan Publishers',
      cost: 20,
      minQuantity: 6
    },
    {
      id: 10,
      name: 'Scholastic',
      cost: 12,
      minQuantity: 12
    }
  ];
}
