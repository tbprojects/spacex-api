import { ControlQuery } from './control-query';

export interface LandingPadLocation {
  name: string;
  region: string;
  latitude: number;
  longitude: number;
}

export interface LandingPad {
  id: string;
  full_name: string;
  status: string;
  location: LandingPadLocation;
  landing_type: string;
  attempted_landings: number;
  successful_landings: number;
  wikipedia: string;
  details: string;
}

export interface LandingPadQuery extends Pick<ControlQuery, 'limit' | 'offset'> {}
