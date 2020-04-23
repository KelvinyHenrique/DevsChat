import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import Intro from './pages/intro/intro';
import { Theme } from './Theme';

export default function App() {

  return (
    <Theme>
      <NavigationContainer>
        <Intro />
      </NavigationContainer>
    </Theme>

  );
}