import { ReactNode, SyntheticEvent } from 'react';

export interface BasicAccordionProps {
  stepId: string;
  expanded: boolean;
  title: string;
  children: ReactNode;
  resourceName: string;
  panelLoading: string;
  onChange: (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => void;
}
