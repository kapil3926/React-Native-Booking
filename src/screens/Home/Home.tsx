import React, {useRef} from 'react';
import {FlatList, View} from 'react-native';
import BestOffers from '../../components/BestOffers/BestOffers';
import BookTrain from '../../components/BookTrain/BookTrain';
import Categories from '../../components/Categories/Categories';
import SoloImage from '../../components/SoloImage/SoloImage';
import WinterJourney from '../../components/WinterJourney/WinterJourney';
import {COLORS} from '../../constant/colors';

const Home = () => {
  const flatlistRef = useRef<FlatList>(null);
  return (
    <FlatList
      ref={flatlistRef}
      renderItem={() => (
        <View style={styles.container}>
          <Categories
            onSubmitSearch={() => {
              flatlistRef.current?.scrollToOffset({offset: 770});
            }}
          />
          <BookTrain />
          <BestOffers />
          <SoloImage number={0} />
          <WinterJourney />
          <SoloImage number={1} />
        </View>
      )}
      data={['unique']}
    />
  );
};

export default Home;
const styles = {
  container: {
    gap: 26,
    paddingVertical: 20,
    backgroundColor: COLORS.placeholder_bg,
  },
};
