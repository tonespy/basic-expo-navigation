import React, { useEffect } from 'react';
import styled from 'styled-components/native';

import { SignUpScreenProps } from '../../navigation';

export const SignUpScreen = ({ navigation, route }: SignUpScreenProps) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: true, headerTitle: 'Sign Up', headerBackTitle: 'Home' });
  }, [navigation]);

  return (
    <Container>
      <EmailText>{route.params.email}</EmailText>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const EmailText = styled.Text`
  color: black;
  font-size: 25px;
  font-weight: normal;
`;
