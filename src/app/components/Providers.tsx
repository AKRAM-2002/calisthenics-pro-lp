'use client';

import { Provider as ReduxProvider } from 'react-redux';
import { ClerkProvider } from '@clerk/nextjs';
import store from '../../store/store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ClerkProvider>
  );
}
