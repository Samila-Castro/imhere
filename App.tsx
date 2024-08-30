import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home'
import { Fragment } from 'react';

export default function App() {
  return (
    <Fragment>
      <StatusBar 
        barStyle="light-content"
        translucent
        />
      <Home/>
    </Fragment>
  );
}

