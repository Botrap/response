export interface CorporationData {

    name: string;
    abbreviation: string;
    description: string;
    active?: boolean;
    createdat?: Date;
    createdby?: number;
    updatedat?: Date;
    updatedby?: number;

  }
  
  export interface CorporationRO {
    corporation: CorporationData;
  }

