import { FC } from 'react';

export interface StepComponentProps {
  stepId: string;
  expanded: boolean;
  title: string;
  resourceName: string;
  panelLoading: string;
  onFinish: (data: Record<string, any>) => void;
  onChange: (stepId: string) => void;
}

export interface StepComponentItem
  extends Omit<Omit<Omit<StepComponentProps, 'onFinish'>, 'onChange'>, 'panelLoading'> {
  component: FC<StepComponentProps>;
  object: string;
}
