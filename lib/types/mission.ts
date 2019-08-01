import { ControlQuery } from './control-query';

export interface Mission {
  mission_name: string;
  mission_id: string;
  manufacturers: string[];
  payload_ids: string[];
  wikipedia: string;
  website: string;
  twitter: string;
  description: string;
}

export interface MissionQuery extends Pick<ControlQuery, 'limit' | 'offset'> {}

