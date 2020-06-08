import { CorporationData } from '../corporation/corporation.interface';
import { SiteEntity } from '../site/site.entity';

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
    site: SiteEntity;
  }

