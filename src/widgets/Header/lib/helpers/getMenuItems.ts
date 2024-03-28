import { Links } from '@/shared/types';

export const getMenuItems = [{
  label: 'catalogue',
  link: Links.CATALOGUE,
  query: '/?pagina=1',
}, {
  label: 'boys',
  link: Links.CATALOGUE,
  query: '/?genero=niños&pagina=1',
}, {
  label: 'girls',
  link: Links.CATALOGUE,
  query: '/?genero=niñas&pagina=1',
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
