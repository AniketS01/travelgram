import React from 'react';
import {Container, Spinner} from 'native-base';
import {StyleSheet} from 'react-native';

const EmptyContainer = () => {
  return (
    <Container>
      <Spinner style={styles.emptycontainer} />
    </Container>
  );
};

export default EmptyContainer;

const styles = StyleSheet.create({
  emptycontainer: {
    flex: 1,
    backgroundColor: '#1b262c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
