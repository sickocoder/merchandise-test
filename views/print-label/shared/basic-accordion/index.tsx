import { FC } from 'react';

import Typography from '@material-ui/core/Typography';

import { Accordion, AccordionSummary, AccordionDetails } from '../../print-label.styles';
import { BasicAccordionProps } from './basic-accordion.types';
import { OnChangeFnType } from 'views/print-label/print-label.types';

const BasicAccordion: FC<BasicAccordionProps> = ({
  expanded,
  onChange,
  stepId,
  title,
  children,
}) => {
  return (
    <Accordion expanded={expanded} onChange={onChange(stepId) as OnChangeFnType}>
      <AccordionSummary aria-controls={`${stepId}-content`} id={`${stepId}-header`}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default BasicAccordion;
