import { Links } from '@/shared/types';

export const getMenuItems = [{
  label: 'catalogue',
  link: Links.CATALOGUE,
}, {
  label: 'boys',
  link: `${Links.CATALOGUE}/?género=niños`,
}, {
  label: 'girls',
  link: `${Links.CATALOGUE}/?género=niñas`,
}, {
  label: 'contacts',
  link: Links.CONTACTS,
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
