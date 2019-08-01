import { ControlQuery } from './control-query';

export interface Height {
  meters: number;
  feet: number;
}

export interface Diameter {
  meters: number;
  feet: number;
}

export interface Mass {
  kg: number;
  lb: number;
}

export interface PayloadWeight {
  id: string;
  name: string;
  kg: number;
  lb: number;
}

export interface ThrustSeaLevel {
  kN: number;
  lbf: number;
}

export interface ThrustVacuum {
  kN: number;
  lbf: number;
}

export interface FirstStage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust_sea_level: ThrustSeaLevel;
  thrust_vacuum: ThrustVacuum;
}

export interface Thrust {
  kN: number;
  lbf: number;
}

export interface Height2 {
  meters: number;
  feet: number;
}

export interface Diameter2 {
  meters: number;
  feet: number;
}

export interface CompositeFairing {
  height: Height2;
  diameter: Diameter2;
}

export interface Payloads {
  option_1: string;
  option_2: string;
  composite_fairing: CompositeFairing;
}

export interface SecondStage {
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
  thrust: Thrust;
  payloads: Payloads;
}

export interface ThrustSeaLevel2 {
  kN: number;
  lbf: number;
}

export interface ThrustVacuum2 {
  kN: number;
  lbf: number;
}

export interface Engines {
  number: number;
  type: string;
  version: string;
  layout: string;
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: ThrustSeaLevel2;
  thrust_vacuum: ThrustVacuum2;
  thrust_to_weight: number;
}

export interface LandingLegs {
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
  height: Height;
  diameter: Diameter;
  mass: Mass;
  payload_weights: PayloadWeight[];
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: LandingLegs;
  wikipedia: string;
  description: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

export interface RocketQuery extends Pick<ControlQuery, 'limit' | 'offset'> {}
