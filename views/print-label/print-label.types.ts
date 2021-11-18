import { ChangeEvent } from 'react';

export type OnChangeFnType = (event: ChangeEvent<{}>, expanded: boolean) => void;
