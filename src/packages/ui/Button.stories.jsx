import React from 'react';

import Button from '@ui/Button';

const conf = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    textColorHover: { control: 'color' },
    text: {control: 'text'}
  },
};

const Template = (args) => {
  const {text, ...props} = args;
  return (<Button {...props}>{text}</Button>);
};

const Primary = Template.bind({});
Primary.args = {
  backgroundColor:'blue',
  textColor:'white',
  textColorHover:'red',
  text: 'This is a button'
};

export default conf;
export {Primary}
