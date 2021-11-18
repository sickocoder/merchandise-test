export interface Shipment {
  shipment: {
    object: 'Shipment';
    to_address: {
      id: string;
    };
    from_address: {
      id: string;
    };
    parcel: {
      id: string;
    };
    customs_info: {
      id: string;
    };
  };
}
