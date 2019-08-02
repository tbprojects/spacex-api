import { ControlQuery } from './control-query';

export interface HistoricalEventLinks {
  reddit: string;
  article: string;
  wikipedia: string;
}

export interface HistoricalEvent {
  id: number;
  title: string;
  event_date_utc: string;
  event_date_unix: number;
  flight_number: number;
  details: string;
  links: HistoricalEventLinks;
}

export interface HistoricalEventQuery extends ControlQuery{
  start: string;
  end: string;
  flight_number: number;
}
