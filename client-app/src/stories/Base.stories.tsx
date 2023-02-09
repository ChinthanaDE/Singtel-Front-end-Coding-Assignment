import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Base from '../component/Base/Base';

export default {
    title: 'Components/Base',
    component: Base,
    argTypes: {
        color: { control: 'color' }
    },
  } as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = (args) => <Base {...args} />;

export const BaseColor = Template.bind({});
BaseColor.args = {
    children:<div style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
        <div>Hello</div>
    </div>
};

