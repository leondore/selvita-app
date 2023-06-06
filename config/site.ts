import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  contactInfo: {
    email: 'info@laselvitadeconcreto.com',
    phone: '(829) 655-1178',
    instagram: 'https://www.instagram.com/stefanyc.mariano/',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    pinterest: 'https://www.pinterest.com/',
  },
  nav: [
    { name: 'diario', label: 'Diario', path: '/' },
    { name: 'recentas', label: 'Recetas', path: '/recetas' },
    { name: 'contacto', label: 'Contacto', path: '/contacto' },
  ],
};
