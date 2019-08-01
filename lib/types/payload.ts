import { ControlQuery } from './control-query';

export interface OrbitParams {
  reference_system: string;
  regime: string;
  longitude: number;
  semi_major_axis_km: number;
  eccentricity: number;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: number;
  lifespan_years: number;
  epoch: Date;
  mean_motion: number;
  raan: number;
}

export interface Payload {
  payload_id: string;
  norad_id: number[];
  reused: boolean;
  customers: string[];
  nationality: string;
  manufacturer: string;
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit: string;
  orbit_params: OrbitParams;
}

export interface PayloadQuery extends ControlQuery {
  flight_id: string;
  start: string;
  end: string;
  flight_number: number;
  launch_year: number;
  launch_date_utc: string;
  launch_date_local: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  core_serial: string;
  land_success: boolean;
  landing_intent: boolean;
  landing_type: string;
  landing_vehicle: string;
  cap_serial: string;
  core_flight: number;
  block: number;
  core_reuse: boolean;
  capsule_reuse: boolean;
  fairings_reused: boolean;
  fairings_recovery_attempt: boolean;
  fairings_recovered: boolean;
  fairings_ship: string;
  site_id: string;
  site_name: string;
  payload_id: string;
  norad_id: number;
  customer: string;
  nationality: string;
  manufacturer: string;
  payload_type: string;
  orbit: string;
  reference_system: string;
  regime: string;
  longitude: number;
  semi_major_axis_km: number;
  eccentricity: number;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: number;
  lifespan_years: number;
  epoch: string;
  mean_motion: number;
  raan: number;
  launch_success: boolean;
}
