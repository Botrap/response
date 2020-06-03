export interface CorporationData {

    name: string;
    costcenter?: number;
    description: string;
    active?: boolean;
    createdat?: Date;
    createdby?: number;
    updatedat?: Date;
    updatedby?: number;

  }
  
  export interface CorporationRO {
    corperation: CorporationData;
  }

