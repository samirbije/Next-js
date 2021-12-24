import React, { useState, useEffect, useCallback } from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  top?: number;
  smooth?: boolean;
};

function scrollToTop(smooth = false) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}

function ScrollToTopWrapper({
  top = 20,
  color = 'black',
  smooth = false,
  ...props
}: Props) {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(document.documentElement.scrollTop > top);
  }, [top]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    // Remove listener on unmount
    return () => document.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const { children } = props;
  return (
    <>
      {visible && (
        <ButtonBase onClick={() => scrollToTop(smooth)} {...props}>
          {children}
        </ButtonBase>
      )}
    </>
  );
}

export default ScrollToTopWrapper;
