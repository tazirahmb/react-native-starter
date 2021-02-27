import React from 'react';

import { Button } from 'react-native';
import { COLOR_MAIN } from '~/styles';

const StyledButton = ({ children, ...rest }) => {
  return <Button color={COLOR_MAIN} title={children} {...rest} />;
};

export default StyledButton;
