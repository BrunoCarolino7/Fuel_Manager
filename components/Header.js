import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ title, goBack, children}) => {
  return (
    <Appbar.Header>
      {
        goBack && // se tiver a função goBack, daí ele coloca este componente ao Appbar ( backAction)
        <Appbar.BackAction onPress={goBack} />
      }
      <Appbar.Content title={title} />
      {children}
    </Appbar.Header>
  );
};

export default Header;
