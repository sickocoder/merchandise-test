import { StepComponentItem } from './steps.types';
import AddressesStep from './addresses';
import { v4 as uuidv4 } from 'uuid';

const dataSet: ReadonlyArray<StepComponentItem> = [
  {
    component: AddressesStep,
    expanded: true,
    stepId: uuidv4(),
    title: 'From address',
  },
  {
    component: AddressesStep,
    expanded: true,
    stepId: uuidv4(),
    title: 'To address',
  },
  {
    component: AddressesStep,
    expanded: true,
    stepId: uuidv4(),
    title: 'Return address',
  },
];

export default dataSet;
