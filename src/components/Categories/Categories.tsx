import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {COLORS} from '../../constant/colors';
import {FontFamily} from '../../constant/fonts';
import AppText from '../App/AppText/AppText';
import AppTextInput from '../App/AppTextInput/AppTextInput';

const Categories = ({onSubmitSearch}: {onSubmitSearch: () => void}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('Trains');
  const [searchPlaces, setSearchPlaces] = useState('');
  return (
    <View>
      <View style={styles.searchPlacesContainer}>
        <AppTextInput
          onEndEditing={onSubmitSearch}
          icon={
            <Image
              style={styles.searchImage}
              source={require('../../assets/search.png')}
            />
          }
          bgColor="white"
          placeholder="Search Places"
          onChangeText={setSearchPlaces}
          value={searchPlaces}
        />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        data={CATEGORIES}
        renderItem={({item}) => (
          <Category
            onPress={category => {
              if (category !== 'Trains') {
                return Alert.alert('This feature is not available currently');
              }
              setActiveCategory(category);
            }}
            item={item}
            isActive={item === activeCategory}
          />
        )}
      />
    </View>
  );
};

export default Categories;

type CategoryProps = {
  item: CategoryType;
  isActive: boolean;
  onPress: (category: CategoryType) => void;
};

const Category: React.FC<CategoryProps> = ({item, isActive, onPress}) => {
  const isTrain = item === 'Trains';
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onPress(item)}
        style={[
          styles.categoryContainer,
          isActive && styles.activeCategory,
          !isTrain && styles.deactivated,
          isTrain && styles.overflowHidden,
        ]}>
        <Image
          resizeMode="contain"
          style={styles.categoryImage}
          source={CATEGORIES_IMAGE[item]}
        />
        {/* <LottieView
          speed={1}
          renderMode="AUTOMATIC"
          resizeMode="cover"
          style={[
            styles.categoryImage,
            item === 'Taxis' && styles.h40,
            item === 'Flights' && styles.ty10,
          ]}
          source={CATEGORIES_BG[item]}
          autoPlay
          loop
        /> */}
      </Pressable>
      <AppText
        text={item}
        style={[styles.categoryText, isActive && styles.activeCategoryText]}
      />
    </View>
  );
};

type CategoryType = (typeof CATEGORIES)[number];

const CATEGORIES = ['Places', 'Flights', 'Trains', 'Buses', 'Taxis'] as const;

const CATEGORIES_IMAGE = {
  Places: require('../../assets/red-fort.png'),
  Flights: require('../../assets/plane.png'),
  Trains: require('../../assets/train.png'),
  Buses: require('../../assets/bus-stop.png'),
  Taxis: require('../../assets/taxi.png'),
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', gap: 6},
  categoryContainer: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 40,
    elevation: 1,
  },
  activeCategory: {
    borderColor: COLORS.purple,
    borderWidth: 2,
  },
  contentContainer: {gap: 16, paddingHorizontal: 20},
  categoryIcon: {height: 40, width: 40},
  categoryText: {fontSize: 12, color: COLORS.text_gray},
  activeCategoryText: {
    color: COLORS.black,
    fontFamily: FontFamily.SemiBold,
  },
  searchPlacesContainer: {paddingHorizontal: 20, paddingVertical: 20},
  searchImage: {height: 24, width: 24},
  deactivated: {
    // opacity: 0.9
  },
  overflowHidden: {overflow: 'hidden'},
  categoryImage: {
    height: 40,
    width: 40,
  },
  ty10: {transform: [{translateY: -10}]},
  h40: {height: 40},
});
