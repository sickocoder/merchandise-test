import { ReactNode, SyntheticEvent } from 'react';

export interface BasicAccordionProps {
  stepId: string;
  expanded: boolean;
  title: string;
  children: ReactNode;
  onChange: (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => void;
}
