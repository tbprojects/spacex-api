import { ControlQuery } from './control-query';

export interface CapsuleMission {
  name: string;
  flight: number;
}

export interface Capsule {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  missions: CapsuleMission[];
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
}

export interface CapsuleQuery extends ControlQuery {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  mission: string;
  landings: number;
  type: string;
  reuse_count: number;
}
