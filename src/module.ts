import { DataSourcePlugin } from '@grafana/data';
import { LindbDatasource } from './datasource';

import { LindbQueryEditor } from './components/LindbQueryEditor';
import PromQueryField from './components/LindbQueryField';

import { ConfigEditor } from './configuration/ConfigEditor';

export const plugin = new DataSourcePlugin(LindbDatasource)
    .setQueryEditor(LindbQueryEditor)
    .setConfigEditor(ConfigEditor)
    .setExploreMetricsQueryField(PromQueryField);