import { StepComponentItem } from './steps.types';
import AddressesStep from './addresses';
import ParcelsStep from './parcels';
import { v4 as uuidv4 } from 'uuid';

import { FROM_ADDRESS, PARCELS, RETURN_ADDRESS, TO_ADDRESS } from '@constants';

const dataSet: ReadonlyArray<StepComponentItem> = [
  {
    component: AddressesStep,
    expanded: true,
    stepId: uuidv4(),
    title: 'From address',
    resourceName: FROM_ADDRESS,
    object: 'Address',
  },
  {
    component: AddressesStep,
    expanded: true,
    stepId: uuidv4(),
    title: 'To address',
    resourceName: TO_ADDRESS,
    object: 'Address',
  },
  {
    component: AddressesStep,
    expanded: true,
    stepId: uuidv4(),
    title: 'Return address',
    resourceName: RETURN_ADDRESS,
    object: 'Address',
  },
  {
    component: ParcelsStep,
    expanded: true,
    stepId: uuidv4(),
    title: 'Parcels',
    resourceName: PARCELS,
    object: 'Parcel',
  },
];

export default dataSet;
