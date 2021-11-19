import { postRequest } from '@services/utils';
import { Parcel as Parcels, APIParcelsResponse } from '../../types/parcel';

export const createParcels = (parcelsData: Parcels) =>
  postRequest<APIParcelsResponse>('parcels', parcelsData);
