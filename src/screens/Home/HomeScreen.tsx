import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';

import { CommonImage } from '../../assets';
import { HomeScreenProps } from '../../navigation';

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [email, setEmail] = useState<string>();

  const handleSignUp = useCallback(() => {
    if (!email) return;
    navigation.navigate('SignUp', {
      email: email,
    });
  }, [email, navigation]);

  return (
    <BackgroundImage source={CommonImage['bgImage']}>
      <Container>
        <ContainerScrollView>
          <TopView>
            <TopTitle>{'Welcom to the big Social 👋🏾'}</TopTitle>
          </TopView>
          <MiddleView>
            <MiddleTitle>
              {
                'At social we believe in a new type of interaction. \n\nOne that crosses the boundaries of what was possible before. \n\nSign up today and check out the future of social networking.'
              }
            </MiddleTitle>
          </MiddleView>
          <BottomView>
            <EmailInput value={email} onChangeText={setEmail} />
            <NotificationContainer>
              <NotificationSwitch />
              <NotificationTitle>
                {'Sign up for newsletter to hear the latest news before anyone else'}
              </NotificationTitle>
            </NotificationContainer>
            <BottomButton onPress={handleSignUp}>
              <ButtonTitle>{'Sign up'}</ButtonTitle>
            </BottomButton>
          </BottomView>
        </ContainerScrollView>
      </Container>
    </BackgroundImage>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

const TopView = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 24px 24px 0 24px;
`;

const TopTitle = styled.Text`
  color: black;
  font-size: 40px;
  font-weight: bold;
`;

const MiddleView = styled.View`
  flex: 1;
  padding: 16px 24px;
`;

const MiddleTitle = styled.Text`
  color: black;
  font-size: 17px;
  font-weight: normal;
`;

const BottomView = styled.View`
  flex: 1;
  gap: 16px;
  padding: 24px 24px 8px 24px;
  justify-content: flex-end;
`;

const EmailInput = styled.TextInput.attrs(() => ({
  autoComplete: 'email',
  keyboardType: 'email-address',
  placeholderTextColor: '#000',
  placeholder: 'Your email address',
}))`
  border-width: 3px;
  border-color: black;
  border-radius: 10px;
  height: 50px;
  padding: 10px;
  text-align: center;
  max-width: 500px;
  background-color: white;
`;

const BackgroundImage = styled.ImageBackground.attrs(() => ({
  resizeMode: 'cover',
}))`
  /* position: absolute; */
  background-color: blue;
  flex: 1;
  justify-content: center;
`;

const BottomButton = styled.TouchableOpacity`
  border-radius: 30px;
  height: 50px;
  background-color: black;
  align-items: center;
  justify-content: center;
  max-width: 500px;
`;

const ButtonTitle = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const NotificationContainer = styled.View`
  flex-direction: row;
  gap: 16px;
`;

const NotificationTitle = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: normal;
  flex: 1;
`;

const NotificationSwitch = styled.Switch.attrs(() => ({
  ios_backgroundColor: '#677383',
  thumbColor: 'white',
  trackColor: {
    false: '#677383',
    true: '#3F1D75',
  },
}))``;

const ContainerScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
  showsVerticalScrollIndicator: false,
}))``;
