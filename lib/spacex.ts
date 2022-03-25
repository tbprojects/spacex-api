import { Capsule, CapsuleQuery } from './types/capsule';
import { Core, CoreQuery } from './types/core';
import { Dragon, DragonQuery } from './types/dragon';
import { HistoricalEvent, HistoricalEventQuery } from './types/historical-event';
import { ApiInfo, CompanyInfo } from './types/info';
import { LandingPad, LandingPadQuery } from './types/landing-pad';
import { Launch, LaunchQuery } from './types/launch';
import { LaunchPad, LaunchPadQuery } from './types/launch-pad';
import { Mission, MissionQuery } from './types/mission';
import { Payload, PayloadQuery } from './types/payload';
import { Roadster } from './types/roadster';
import { Rocket, RocketQuery } from './types/rocket';
import { Ship, ShipQuery } from './types/ship';

export class SpaceX {
  static ApiUrl = 'https://api.spacexdata.com/v4';

  static getAllCapsules(query?: Partial<CapsuleQuery>): Promise<Capsule[]> {
    return SpaceX.makeRequest('/capsules', query);
  }

  static getCapsule(id: string): Promise<Capsule> {
    return SpaceX.makeRequest('/capsules/' + id);
  }

  static getUpcomingCapsules(query?: Partial<CapsuleQuery>): Promise<Capsule[]> {
    return SpaceX.makeRequest('/capsules/upcoming', query);
  }

  static getPastCapsules(query?: Partial<CapsuleQuery>): Promise<Capsule[]> {
    return SpaceX.makeRequest('/capsules/past', query);
  }

  static getAllCores(query?: Partial<CoreQuery>): Promise<Core[]> {
    return SpaceX.makeRequest('/cores', query);
  }

  static getCore(id: string): Promise<Core> {
    return SpaceX.makeRequest('/cores/' + id);
  }

  static getUpcomingCores(query?: Partial<CoreQuery>): Promise<Core[]> {
    return SpaceX.makeRequest('/cores/upcoming', query);
  }

  static getPastCores(query?: Partial<CoreQuery>): Promise<Core[]> {
    return SpaceX.makeRequest('/cores/past', query);
  }

  static getAllDragons(query?: Partial<DragonQuery>): Promise<Dragon[]> {
    return SpaceX.makeRequest('/dragons', query);
  }

  static getDragon(id: string): Promise<Dragon> {
    return SpaceX.makeRequest('/dragons/' + id);
  }

  static getAllHistoryEvents(query?: Partial<HistoricalEventQuery>): Promise<HistoricalEvent[]> {
    return SpaceX.makeRequest('/history', query);
  }

  static getHistoryEvent(id: number): Promise<HistoricalEvent> {
    return SpaceX.makeRequest('/history/' + id);
  }

  static getCompanyInfo(): Promise<CompanyInfo> {
    return SpaceX.makeRequest('/info');
  }

  static getApiInfo(): Promise<ApiInfo> {
    return SpaceX.makeRequest('/');
  }

  static getAllLandingPads(query?: Partial<LandingPadQuery>): Promise<LandingPad[]> {
    return SpaceX.makeRequest('/landpads', query);
  }

  static getLandingPad(id: string): Promise<LandingPad> {
    return SpaceX.makeRequest('/landpads/' + id);
  }

  static getAllLaunches(query?: Partial<LaunchQuery>): Promise<Launch[]> {
    return SpaceX.makeRequest('/launches', query);
  }

  static getLaunch(id: number): Promise<Launch> {
    return SpaceX.makeRequest('/launches' + id);
  }

  static getPastLaunches(query?: Partial<LaunchQuery>): Promise<Launch[]> {
    return SpaceX.makeRequest('/launches/past', query);
  }

  static getUpcomingLaunches(query?: Partial<LaunchQuery>): Promise<Launch[]> {
    return SpaceX.makeRequest('/launches/upcoming', query);
  }

  static getLatestLaunch(): Promise<Launch> {
    return SpaceX.makeRequest('/launches/latest');
  }

  static getNextLaunch(): Promise<Launch> {
    return SpaceX.makeRequest('/launches/next');
  }

  static getAllLaunchPads(query?: Partial<LaunchPadQuery>): Promise<LaunchPad[]> {
    return SpaceX.makeRequest('/launchpads', query);
  }

  static getLaunchPad(id: string): Promise<LaunchPad> {
    return SpaceX.makeRequest('/launchpads/' + id);
  }

  static getAllMissions(query?: Partial<MissionQuery>): Promise<Mission[]> {
    return SpaceX.makeRequest('/missions', query);
  }

  static getMission(id: string): Promise<Mission> {
    return SpaceX.makeRequest('/missions/' + id);
  }

  static getAllPayloads(query?: Partial<PayloadQuery>): Promise<Payload[]> {
    return SpaceX.makeRequest('/payloads', query);
  }

  static getPayload(id: string): Promise<Payload> {
    return SpaceX.makeRequest('/payloads/' + id);
  }

  static getAllRockets(query?: Partial<RocketQuery>): Promise<Rocket[]> {
    return SpaceX.makeRequest('/rockets', query);
  }

  static getRocket(id: string): Promise<Rocket> {
    return SpaceX.makeRequest('/rockets/' + id);
  }

  static getRoadster(): Promise<Roadster> {
    return SpaceX.makeRequest('/roadster');
  }

  static getAllShips(query?: Partial<ShipQuery>): Promise<Ship[]> {
    return SpaceX.makeRequest('/ships', query);
  }

  static getShip(id: string): Promise<Ship> {
    return SpaceX.makeRequest('/ships/' + id);
  }

  static makeRequest(url: string, query?: Record<string, any>): Promise<any> {
    const queryString = new URLSearchParams(query).toString();
    return fetch(SpaceX.ApiUrl + url + '?' + queryString).then(response => response.json());
  }
}
