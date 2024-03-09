import { Links } from '@/shared/types';

export const getMenuItems = [{
  label: 'catalogue',
  link: Links.CATALOGUE,
  color: '#115e67',
}, {
  label: 'forBoys',
  link: `${Links.CATALOGUE}/?género=niños`,
  color: '#d9b89a',
}, {
  label: 'forGirls',
  link: `${Links.CATALOGUE}/?género=niñas`,
  color: '#9d2b2e',
}, {
  label: 'contacts',
  link: Links.CONTACTS,
  color: '#ff7c2a',
},
// {
//   label: 'findYorFit',
//   link: Links.FIND_FIT,
//   color: '#d9b89a',
// },
// {
//   label: 'menu.newCollection',
//   link: Links.FIND_FIT,
//   color: '#9d2b2e',
// }
];
