import { styled } from '@material-ui/styles';
import MuiAccordion, { AccordionProps } from '@material-ui/core/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${(theme as any).palette.divider}`,
  '&:before': {
    display: 'none',
  },
}));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosIcon />} {...props} />
))(({ theme }) => ({
  backgroundColor:
    (theme as any).palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: (theme as any).spacing(1),
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: (theme as any).spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
