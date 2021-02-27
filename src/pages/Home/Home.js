import React from 'react';
import { View, Text } from 'react-native';

import {
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PageBase from '@layouts/PageBase';
import { Button } from '@elements';
import styles from './styles';
import { ROUTES } from '~/configs';

const Home = ({ navigation }) => {
  return (
    <PageBase>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Step One</Text>
          <Text style={styles.sectionDescription}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then coba balik lagi.
          </Text>
          <Button
            onPress={() =>
              navigation.navigate(ROUTES.PROFILE, { name: 'Zira' })
            }
          >
            Click Me!
          </Button>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>See Your Changes</Text>
          <Text style={styles.sectionDescription}>
            <ReloadInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Debug</Text>
          <Text style={styles.sectionDescription}>
            <DebugInstructions />
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Learn More</Text>
          <Text style={styles.sectionDescription}>
            Read the docs to discover what to do next:
          </Text>
        </View>
        <LearnMoreLinks />
      </View>
    </PageBase>
  );
};

export default Home;
