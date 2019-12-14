import { DataQuery, DataSourceJsonData } from '@grafana/data';

export enum LindbContext {
  Explore = 'explore',
  Panel = 'panel',
}

export interface LindbQuery extends DataQuery {
  expr: string;
  context?: LindbContext;
  format?: string;
  instant?: boolean;
  hinting?: boolean;
  interval?: string;
  intervalFactor?: number;
  legendFormat?: string;
  valueWithRefId?: boolean;
  requestId?: string;
  showingGraph?: boolean;
  showingTable?: boolean;
}

export interface LindbOptions extends DataSourceJsonData {
  timeInterval: string;
  queryTimeout: string;
  httpMethod: string;
  directUrl: string;
  customQueryParameters?: string;
}

export interface LindbQueryRequest extends LindbQuery {
  step?: number;
  requestId?: string;
  start: number;
  end: number;
  headers?: any;
}

