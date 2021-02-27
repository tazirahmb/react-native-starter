import React from 'react';
import { View, Text } from 'react-native';

import PageBase from '@layouts/PageBase';
import styles from './styles';

const Profile = ({ route: { params } }) => {
  return (
    <PageBase>
      <View style={styles.body}>
        <Text>Hello {params.name}!</Text>
      </View>
    </PageBase>
  );
};

export default Profile;
