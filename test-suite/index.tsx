/* eslint-disable import/no-extraneous-dependencies */
import { ThemeProvider } from '@material-ui/styles';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { RenderHookOptions } from '@testing-library/react-hooks/lib/types';
import { FC, ReactNode } from 'react';

import theme from '../theme';
import { CustomRender } from './test-suite.types';

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const customRender: CustomRender = (ui, options = {}) => {
  return render(ui, {
    wrapper: MainProvider,
    ...options,
  });
};

function customRenderHook<P, R>(cb: (props: P) => R, extraOptions?: RenderHookOptions<P>) {
  return renderHook(cb, extraOptions);
}

export * from '@testing-library/react';
export * as reactHooks from '@testing-library/react-hooks';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
export { customRenderHook as renderHook };
