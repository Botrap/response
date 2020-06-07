
import { CorporationEntity } from './corporation.entity';

export interface CorporationData {

    slug: string;
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
    corporation: CorporationData;
  }

  export interface CorporationsRO {
    corporations: CorporationEntity;
    corporationsCount: number;
  }
  

