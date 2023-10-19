import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const onSignInGooglePressed = () => {
    console.warn('Press');
  };

  const onSignInApplePressed = () => {
    console.warn('Press');
  };
  return (
    <>
      <CustomButton
        onPress={onSignInGooglePressed}
        text={'Sign in with Google'}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      {/** #E3E3E3 , #363636*/}
      <CustomButton
        onPress={onSignInApplePressed}
        text={'Sign in with Apple'}
        bgColor="#000"
        fgColor="#fff"
      />
    </>
  );
};

export default SocialSignInButtons;
