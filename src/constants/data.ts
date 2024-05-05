import { CardInterface } from '../interfaces/card.interface';
import moment from 'moment';
import { ConvertDateES2En } from '../utils/utils';

export const InitialData: CardInterface[] = [
  {
    title: 'Banco Central',
    image: './images/BCV.webp',
    price: 'isLoading',
    fecha: '',
  },
  {
    title: 'Dolar Today',
    image: './images/dolarToday.webp',
    price: 'isLoading',
    fecha: '',
  },
  {
    title: 'Monitor Dolar',
    image: './images/dolarMonitor.webp',
    price: 'isLoading',
    fecha: '',
  },
  {
    title: 'Bitcoin',
    image: './images/bitcoin.webp',
    price: 'isLoading',
    fecha: '',
  },
];

type PricesPros = {
  name: string;
  price: string;
};

export const updateData = (prices: PricesPros[]) => {
  const date = moment().utc().format('hh:mm A DD/MM/YYYY');

  return [
    {
      title: 'Banco Central',
      image: './images/BCV.webp',
      price: prices ? prices[0].price : 'isLoading',
      fecha: date,
    },
    {
      title: prices[1].name,
      image: './images/dolarToday.webp',
      price: prices ? prices[1].price : 'isLoading',
      fecha: date,
    },
    {
      title: prices[2].name,
      image: './images/dolarMonitor.webp',
      price: prices ? prices[2].price : 'isLoading',
      fecha: date,
    },
    {
      title: prices[3].name,
      image: './images/bitcoin.webp',
      price: prices ? prices[3].price : 'isLoading',
      fecha: date,
    },
  ];
};
