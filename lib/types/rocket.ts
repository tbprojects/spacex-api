import { ControlQuery } from './control-query';

export interface RocketLength {
  meters: number;
  feet: number;
}

export interface RocketMass {
  kg: number;
  lb: number;
}

export interface RocketPayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

export interface RocketFirstStage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust_sea_level: RocketThrust;
  thrust_vacuum: RocketThrust;
}

export interface RocketThrust {
  kN: number;
  lbf: number;
}

export interface RocketCompositeFairing {
  height: RocketLength;
  diameter: RocketLength;
}

export interface RocketPayloads {
  option_1: string;
  option_2: string;
  composite_fairing: RocketCompositeFairing;
}

export interface RocketSecondStage {
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust: RocketThrust;
  payloads: RocketPayloads;
}

export interface RocketEngines {
  number: number;
  type: string;
  version: string;
  layout: string;
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: RocketThrust;
  thrust_vacuum: RocketThrust;
  thrust_to_weight: number;
}

export interface RocketLandingLegs {
  number: number;
  material: string;
}

export interface Rocket {
  id: number;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: RocketLength;
  diameter: RocketLength;
  mass: RocketMass;
  payload_weights: RocketPayloadWeight[];
  first_stage: RocketFirstStage;
  second_stage: RocketSecondStage;
  engines: RocketEngines;
  landing_legs: RocketLandingLegs;
  wikipedia: string;
  description: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

export interface RocketQuery extends Pick<ControlQuery, 'limit' | 'offset'> {}
