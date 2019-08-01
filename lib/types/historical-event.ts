import { ControlQuery } from './control-query';

export interface Links {
  reddit: string;
  article: string;
  wikipedia: string;
}

export interface HistoricalEvent {
  id: number;
  title: string;
  event_date_utc: Date;
  event_date_unix: number;
  flight_number: number;
  details: string;
  links: Links;
}

export interface HistoricalEventQuery extends ControlQuery{
  start: string;
  end: string;
  flight_number: number;
}
