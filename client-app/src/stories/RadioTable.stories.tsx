import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from '../component/Table/RadioTable/Table';

const data = [
  {
    operator: '*CELCOM Axiata(LTE)',
    head_set: 'CELCOM/My Celcom/50219',
    avalbale_3g: 'Yes',
  },
  {
    operator: '*DiGi Telecom',
    head_set: 'DiGi 1800/ DiGi/ MYMY18',
    avalbale_3g: 'Yes',
  },
  {
    operator: '*Maxis(LTE)',
    head_set: 'U Mobile/ MYS 18/MY 18',
    avalbale_3g: 'Yes',
  },
];

const columns = [
  { title: 'Operator', key: 'operator' },
  { title: 'Headset Display', key: 'head_set' },
  { title: '3G Availability', key: 'avalbale_3g' },
];

export default {
  title: 'Page/RadioTable',
  component: Table,
  argTypes: {
    isSingleSelectEnabled: { type: 'boolean' },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => <Table {...args} />;

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  data,
  columns,
  isSingleSelectEnabled: false,
};

export const RadioEnabledTable = Template.bind({});
RadioEnabledTable.args = {
  data,
  columns,
  isSingleSelectEnabled: true,
};
