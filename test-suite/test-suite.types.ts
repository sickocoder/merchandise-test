/* eslint-disable import/no-extraneous-dependencies */
import { RenderOptions, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';

export type CustomRender = (ui: ReactElement, options?: RenderOptions) => RenderResult;
