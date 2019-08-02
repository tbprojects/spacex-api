import { ControlQuery } from './control-query';

export interface DragonHeatShield {
  material: string;
  size_meters: number;
  temp_degrees: number;
  dev_partner: string;
}

export interface DragonThrust {
  kN: number;
  lbf: number;
}

export interface DragonThruster {
  type: string;
  amount: number;
  pods: number;
  fuel_1: string;
  fuel_2: string;
  thrust: DragonThrust;
}

export interface DragonMass {
  kg: number;
  lb: number;
}

export interface DragonVolume {
  cubic_meters: number;
  cubic_feet: number;
}

export interface PressurizedCapsule {
  payload_volume: DragonVolume;
}

export interface DragonCargo {
  solar_array: number;
  unpressurized_cargo: boolean;
}

export interface DragonTrunk {
  trunk_volume: DragonVolume;
  cargo: DragonCargo;
}

export interface DragonLength {
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
  heat_shield: DragonHeatShield;
  thrusters: DragonThruster[];
  launch_payload_mass: DragonMass;
  launch_payload_vol: DragonVolume;
  return_payload_mass: DragonMass;
  return_payload_vol: DragonVolume;
  pressurized_capsule: PressurizedCapsule;
  trunk: DragonTrunk;
  height_w_trunk: DragonLength;
  diameter: DragonLength;
  wikipedia: string;
  description: string;
}

export interface DragonQuery extends Pick<ControlQuery, 'limit' | 'offset'> {}
