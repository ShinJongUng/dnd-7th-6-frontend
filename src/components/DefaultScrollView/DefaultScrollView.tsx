import React, {PropsWithChildren} from 'react';

import {DefaultScroll} from './DefaultScrollView.styles';

const DefaultScrollView = ({children}: PropsWithChildren) => {
  return (
    <DefaultScroll bounces={false} overScrollMode={'never'}>
      {children}
    </DefaultScroll>
  );
};

export default DefaultScrollView;