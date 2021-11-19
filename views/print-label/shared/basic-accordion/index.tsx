import { FC } from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { Accordion, AccordionSummary, AccordionDetails } from '../../print-label.styles';
import { BasicAccordionProps } from './basic-accordion.types';
import { OnChangeFnType } from 'views/print-label/print-label.types';

const BasicAccordion: FC<BasicAccordionProps> = ({
  expanded,
  onChange,
  stepId,
  title,
  children,
  resourceName,
  panelLoading,
}) => {
  return (
    <Accordion expanded={expanded} onChange={onChange(stepId) as OnChangeFnType}>
      <AccordionSummary aria-controls={`${stepId}-content`} id={`${stepId}-header`}>
        {panelLoading === resourceName && (
          <CircularProgress size={20} style={{ marginRight: 16 }} />
        )}

        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
        <div style={{ marginTop: 32 }}>
          <Button variant="contained" type="submit" form={resourceName}>
            submit
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default BasicAccordion;
