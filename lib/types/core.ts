import { ControlQuery } from './control-query';

export interface CoreMission {
  name: string;
  flight: number;
}

export interface Core {
  core_serial: string;
  block: number;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  missions: CoreMission[];
  reuse_count: number;
  rtls_attempts: number;
  rtls_landings: number;
  asds_attempts: number;
  asds_landings: number;
  water_landing: boolean;
  details: string;
}

export interface CoreQuery extends ControlQuery {
  core_serial: string;
  block: number;
  status: string;
  original_launch: string;
  mission: string;
  reuse_count: number;
  rtls_attempts: number;
  rtls_landings: number;
  asds_attempts: number;
  asds_landings: number;
  water_landing: number;
}
