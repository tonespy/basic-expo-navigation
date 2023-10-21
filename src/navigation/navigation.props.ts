import type { LinkingOptions, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MainStackParamList } from './navigators/main-stack/main-stack.props';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}

export type AppLinkingOptions = LinkingOptions<AppStackParamList>;

// ––––––––––––––––––––––––––––––––––––––––––––
// AppStack
// ––––––––––––––––––––––––––––––––––––––––––––

export type AppStackParamList = {
  readonly Main: NavigatorScreenParams<MainStackParamList>;
};

export type AppStackChild<Keys extends keyof AppStackParamList = keyof AppStackParamList> =
  keyof Pick<AppStackParamList, Keys>;

export type AppStackChildProps<T extends AppStackChild> = NativeStackScreenProps<
  AppStackParamList,
  T
>;
