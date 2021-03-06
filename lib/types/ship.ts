import { ControlQuery } from './control-query';

export interface ShipPosition {
  latitude: number;
  longitude: number;
}

export interface ShipMission {
  name: string;
  flight: number;
}

export interface Ship {
  ship_id: string;
  ship_name: string;
  ship_model: string;
  ship_type: string;
  roles: string[];
  active: boolean;
  imo: number;
  mmsi: number;
  abs: number;
  class: number;
  weight_lbs: number;
  weight_kg: number;
  year_built: number;
  home_port: string;
  status: string;
  speed_kn: number;
  course_deg: number;
  position: ShipPosition;
  successful_landings: number;
  attempted_landings: number;
  missions: ShipMission[];
  url: string;
  image: string;
}

export interface ShipQuery extends ControlQuery {
  ship_id: string;
  ship_name: string;
  ship_model: string;
  ship_type: string;
  role: string;
  active: boolean;
  imo: number;
  mmsi: number;
  abs: number;
  class: number;
  weight_lbs: number;
  weight_kg: number;
  year_built: number;
  home_port: string;
  status: string;
  speed_kn: number;
  course_deg: number;
  latitude: number;
  longitude: number;
  successful_landings: number;
  attempted_landings: number;
  mission: string;
}
