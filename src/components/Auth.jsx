import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/auth';
import { If } from 'react-if';
export default function Auth(props) {
  const { isLoggenIn, username } = useContext(AuthContext);

  let okToRender =
    isLoggenIn && props.capability
      ? username?.capabilities?.includes(props.capability)
      : false;
  return (
    <If condition={okToRender}>
      <div>{props.children}</div>
    </If>
  );
}
