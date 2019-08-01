import { ControlQuery } from './control-query';

export interface HeatShield {
  material: string;
  size_meters: number;
  temp_degrees: number;
  dev_partner: string;
}

export interface Thrust {
  kN: number;
  lbf: number;
}

export interface Thruster {
  type: string;
  amount: number;
  pods: number;
  fuel_1: string;
  fuel_2: string;
  thrust: Thrust;
}

export interface LaunchPayloadMass {
  kg: number;
  lb: number;
}

export interface LaunchPayloadVol {
  cubic_meters: number;
  cubic_feet: number;
}

export interface ReturnPayloadMass {
  kg: number;
  lb: number;
}

export interface ReturnPayloadVol {
  cubic_meters: number;
  cubic_feet: number;
}

export interface PayloadVolume {
  cubic_meters: number;
  cubic_feet: number;
}

export interface PressurizedCapsule {
  payload_volume: PayloadVolume;
}

export interface TrunkVolume {
  cubic_meters: number;
  cubic_feet: number;
}

export interface Cargo {
  solar_array: number;
  unpressurized_cargo: boolean;
}

export interface Trunk {
  trunk_volume: TrunkVolume;
  cargo: Cargo;
}

export interface HeightWTrunk {
  meters: number;
  feet: number;
}

export interface Diameter {
  meters: number;
  feet: number;
}

export interface Dragon {
  id: string;
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  dry_mass_lb: number;
  first_flight: string;
  heat_shield: HeatShield;
  thrusters: Thruster[];
  launch_payload_mass: LaunchPayloadMass;
  launch_payload_vol: LaunchPayloadVol;
  return_payload_mass: ReturnPayloadMass;
  return_payload_vol: ReturnPayloadVol;
  pressurized_capsule: PressurizedCapsule;
  trunk: Trunk;
  height_w_trunk: HeightWTrunk;
  diameter: Diameter;
  wikipedia: string;
  description: string;
}

export interface DragonQuery extends Pick<ControlQuery, 'limit' | 'offset'> {}
