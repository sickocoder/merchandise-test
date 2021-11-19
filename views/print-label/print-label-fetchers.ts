import { createAddress } from '@services/address';
import { createParcels } from '@services/parcels';

import { FROM_ADDRESS, PARCELS, RETURN_ADDRESS, TO_ADDRESS } from '@constants';

export const fetchers = {
  [FROM_ADDRESS]: createAddress,
  [TO_ADDRESS]: createAddress,
  [RETURN_ADDRESS]: createAddress,
  [PARCELS]: createParcels,
};
