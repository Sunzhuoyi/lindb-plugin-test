import React from 'react';
import { DataSourceHttpSettings } from '@grafana/ui';
import { DataSourcePluginOptionsEditorProps } from '@grafana/data';
import { PromSettings } from './PromSettings';
import { LindbOptions } from '../types';

export type Props = DataSourcePluginOptionsEditorProps<LindbOptions>;
export const ConfigEditor = (props: Props) => {
  const { options, onOptionsChange } = props;
  return (
    <>
      <DataSourceHttpSettings
        defaultUrl="http://localhost:9090"
        dataSourceConfig={options}
        onChange={onOptionsChange}
      />
      <PromSettings value={options} onChange={onOptionsChange} />
    </>
  );
};
