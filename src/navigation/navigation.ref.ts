import { createRef } from 'react';
import type { NavigationContainerRefWithCurrent } from '@react-navigation/native';

import type { AppStackParamList } from './navigation.props';

const AppNavigationContainerRef = createRef<NavigationContainerRefWithCurrent<AppStackParamList>>();

export const getAppNavigationContainerRef = () => AppNavigationContainerRef;
