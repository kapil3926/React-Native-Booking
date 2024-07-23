import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Solo_Image = [
  'https://www.fodors.com/wp-content/uploads/2018/10/2_UltimateRome_TheColosseum.jpg',
  'https://www.fodors.com/wp-content/uploads/2018/10/5_UltimateRome_VaticanMuseum.jpg',
];

const SoloImage = ({number}: {number: number}) => {
  return (
    <Image
      style={styles.soloImage}
      source={{
        uri: Solo_Image[number],
      }}
    />
  );
};

export default SoloImage;

const styles = StyleSheet.create({
  soloImage: {height: 200, borderRadius: 8, marginHorizontal: 20},
});
