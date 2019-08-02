import { ControlQuery } from './control-query';

export interface LaunchCore {
  core_serial: string;
  flight: number;
  block: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  land_success: boolean;
  landing_intent: boolean;
  landing_type: string;
  landing_vehicle: string;
}

export interface LaunchFirstStage {
  cores: LaunchCore[];
}

export interface LaunchOrbitParams {
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
  arg_of_pericenter: number;
  mean_anomaly: number;
}

export interface LaunchPayload {
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
  orbit_params: LaunchOrbitParams;
}

export interface LaunchSecondStage {
  block: number;
  payloads: LaunchPayload[];
}

export interface LaunchFairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ship: any;
}

export interface LaunchRocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: LaunchFirstStage;
  second_stage: LaunchSecondStage;
  fairings: LaunchFairings;
}

export interface LaunchTelemetry {
  flight_club: string;
}

export interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface LaunchLinks {
  mission_patch: string;
  mission_patch_small: string;
  reddit_campaign: string;
  reddit_launch: string;
  reddit_recovery: string;
  reddit_media: string;
  presskit: string;
  article_link: string;
  wikipedia: string;
  video_link: string;
  youtube_id: string;
  flickr_images: string[];
}

export interface LaunchTimeline {
  webcast_liftoff: number;
  go_for_prop_loading: number;
  rp1_loading: number;
  stage1_lox_loading: number;
  stage2_lox_loading: number;
  engine_chill: number;
  prelaunch_checks: number;
  propellant_pressurization: number;
  go_for_launch: number;
  ignition: number;
  liftoff: number;
  maxq: number;
  meco: number;
  stage_sep: number;
  second_stage_ignition: number;
  fairing_deploy: number;
  first_stage_entry_burn: number;
  'seco-1': number;
  first_stage_landing: number;
  second_stage_restart: number;
  'seco-2': number;
  payload_deploy: number;
}

export interface Launch {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: LaunchRocket;
  ships: string[];
  telemetry: LaunchTelemetry;
  launch_site: LaunchSite;
  launch_success: boolean;
  links: LaunchLinks;
  details: string;
  upcoming: boolean;
  static_fire_date_utc: string;
  static_fire_date_unix: number;
  timeline: LaunchTimeline;
}

export interface LaunchQuery extends ControlQuery {
  flight_id: string;
  start: string;
  end: string;
  flight_number: number;
  launch_year: number;
  launch_date_utc: string;
  launch_date_local: string;
  tbd: boolean;
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
  gridfins: boolean;
  legs: boolean;
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
