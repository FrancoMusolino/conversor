import React from 'react';
import { NavLink } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

const LinkItem = ({ path, text }) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <>
          {isActive ? (
            <Text color='brand.primary'>{text}</Text>
          ) : (
            <Text color='brand.textWhite'>{text}</Text>
          )}
        </>
      )}
    </NavLink>
  );
};

export default LinkItem;
