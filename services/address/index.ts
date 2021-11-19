import { postRequest } from '@services/utils';
import { Address, APIAddressResponse } from '../../types/address';

export const createAddress = (addressData: Address) =>
  postRequest<APIAddressResponse>('addresses', addressData);
