import arabe from './assets/img/Type=Árabe.png'
import cafeComLeite from './assets/img/Type=Café Gelado.png'
import capuccino from './assets/img/Type=Capuccino.png'
import chocolateQuente from './assets/img/Type=Chocolate Quente.png'
import cubano from './assets/img/Type=Cubano.png'
import expressoAmericano from './assets/img/Type=Expresso Cremoso.png'
import expressoCremoso from './assets/img/Type=Expresso Cremoso.png'
import expressoGelado from './assets/img/Type=Expresso.png'
import expresso from './assets/img/Type=Expresso.png'
import havaiano from './assets/img/Type=Havaiano.png'
import irlandes from './assets/img/Type=Irlandês.png'
import latte from './assets/img/Type=Latte.png'
import macchiato from './assets/img/Type=Macchiato.png'
import mocaccino from './assets/img/Type=Mochaccino.png'

import type { CoffeeProps } from './components/Card'


export const coffeeCatalog: CoffeeProps[] = [
  {
    id: 1,
    price: 9.90,
    amount: 1,
    name: 'Expresso Tradicional',
    description: `O tradicional café feito com água quente e grãos moídos`,
    image: expresso,
    tags: ['tradicional'],
  },

  {
    id: 2,
    price: 9.90,
    amount: 1,
    name: 'Expresso Americano',
    description: `Expresso diluído, menos intenso que o tradicional`,
    image: expressoAmericano,
    tags: ['tradicional'],
  },

  {
    id: 3,
    price: 9.90,
    amount: 1,
    name: 'Expresso Cremoso',
    description: `Café expresso tradicional com espuma cremosa`,
    image: expressoCremoso,
    tags: ['tradicional'],
  },

  {
    id: 4,
    price: 9.90,
    amount: 1,
    name: 'Expresso Gelado',
    description: `Bebida preparada com café expresso e cubos de gelo`,
    image: expressoGelado,
    tags: ['tradicional', 'gelado'],
  },

  {
    id: 5,
    price: 9.90,
    amount: 1,
    name: 'Café com Leite',
    description: `Meio a meio de expresso tradicional com leite vaporizado`,
    image: cafeComLeite,
    tags: ['tradicional', 'com leite'],
  },

  {
    id: 6,
    price: 9.90,
    amount: 1,
    name: 'Latte',
    description: `Uma dose de café expresso com o dobro de leite e espuma cremosa`,
    image: latte,
    tags: ['tradicional', 'com leite'],
  },

  {
    id: 7,
    price: 9.90,
    amount: 1,
    name: 'Capuccino',
    description: `Bebida com canela feita de doses iguais de café, leite e espuma`,
    image: capuccino,
    tags: ['tradicional', 'com leite'],
  },

  {
    id: 8,
    price: 9.90,
    amount: 1,
    name: 'Macchiato',
    description: `Café expresso misturado com um pouco de leite quente e espuma`,
    image: macchiato,
    tags: ['tradicional', 'com leite'],
  },

  {
    id: 9,
    price: 9.90,
    amount: 1,
    name: 'Mocaccino',
    description: `Café expresso com calda de chocolate, pouco leite e espuma`,
    image: mocaccino,
    tags: ['tradicional', 'com leite'],
  },

  {
    id: 10,
    price: 9.90,
    amount: 1,
    name: 'Chocolate Quente',
    description: `Bebida feita com chocolate dissolvido no leite quente e café`,
    image: chocolateQuente,
    tags: ['especial', 'com leite'],
  },

  {
    id: 11,
    price: 9.90,
    amount: 1,
    name: 'Cubano',
    description: `Drink gelado de café expresso com rum, creme de leite e hortelã`,
    image: cubano,
    tags: ['especial', 'com leite'],
  },

  {
    id: 12,
    price: 9.90,
    amount: 1,
    name: 'Havaiano',
    description: `Bebida adocicada preparada com café e leite de coco`,
    image: havaiano,
    tags: ['especial', 'com leite', 'gelado'],
  },

  {
    id: 13,
    price: 9.90,
    amount: 1,
    name: 'Árabe',
    description: `Bebida preparada com grãos de café árabe e especiarias`,
    image: arabe,
    tags: ['especial'],
  },

  {
    id: 14,
    price: 9.90,
    amount: 1,
    name: 'Irlandês',
    description: `Bebida a base de café, uísque irlandês, açúcar e Chantilly`,
    image: irlandes,
    tags: ['especial', 'alcoólico'],
  },
]