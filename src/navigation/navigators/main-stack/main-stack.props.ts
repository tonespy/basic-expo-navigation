import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackChildProps } from '../../navigation.props';

// ––––––––––––––––––––––––––––––––––––––––––––
// AppStack > Main
// ––––––––––––––––––––––––––––––––––––––––––––
export type MainStackParamList = {
  readonly Home?: undefined;
  readonly SignUp: {
    readonly email: string;
  };
};

export type MainStackScreenProps = AppStackChildProps<'Main'>;

export type MainStackScreenName<Keys extends keyof MainStackParamList = keyof MainStackParamList> =
  keyof Pick<MainStackParamList, Keys>;

export type MainStackChildProps<T extends MainStackScreenName> = CompositeScreenProps<
  NativeStackScreenProps<MainStackParamList, T>,
  MainStackScreenProps
>;

export type HomeScreenProps = MainStackChildProps<'Home'>;
export type SignUpScreenProps = MainStackChildProps<'SignUp'>;
