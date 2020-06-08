import { CorporationData } from '../corporation/corporation.interface';

export interface SiteData {

    name: string;
    costcenter?: number;
    description: string;
    active?: boolean;
    createdat?: Date;
    createdby?: number;
    updatedat?: Date;
    updatedby?: number;
    corporation?: CorporationData;
  }
  
  export interface SiteRO {
    site: SiteData;
  }

