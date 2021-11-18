import { FC } from 'react';
import { OnChangeFnType } from '../print-label.types';

export interface StepComponentProps {
  stepId: string;
  expanded: boolean;
  title: string;
  onFinish: (data: Record<string, any>) => void;
  onChange: (stepId: string) => void;
}

export interface StepComponentItem extends Omit<Omit<StepComponentProps, 'onFinish'>, 'onChange'> {
  component: FC<StepComponentProps>;
}
