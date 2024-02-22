import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { MUIThemeProvider } from '@/appLayer/providers';

import { Header } from '@/widgets/Header';

import { NotifyContainer } from './components';

import './styles/globals.scss';

export const App = ({ children }: React.PropsWithChildren) => (
  <AppRouterCacheProvider>
    <MUIThemeProvider>

      <NotifyContainer />

      <Header />

      <main>{children}</main>
    </MUIThemeProvider>
  </AppRouterCacheProvider>
);
