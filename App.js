// lab3 b3
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, FlatList, Image } from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const App = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [headerHeight, setHeaderHeight] = useState(150);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true },
  );

  const translateYInterpolate = scrollY.interpolate({
    inputRange: [0, 160],
    outputRange: [0, -110],
    extrapolate: 'clamp',
  });

  const headerStyle = {
    transform: [{ translateY: translateYInterpolate }],
  };
  // const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, index * 50, (index + 1) * 70];

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [-0, 1, 1, -0],
    });

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [-0.5, 1, 1, -0.5],
    });

    return (
      <Animated.View style={{ opacity, transform: [{ scale }] }}>
        <Text style={styles.item}>{item}</Text>
      </Animated.View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.header, headerStyle]}>
        <Image
          style={{ width: 50, height:50 ,borderRadius:5 }}
          source={{
            uri: 'https://i.etsystatic.com/46358709/r/il/81c5b1/5767922173/il_570xN.5767922173_7n5j.jpg',
          }}
        />
        <Text style = {{color: 'white', fontSize: 20, fontWeight:'bold',marginTop: 10}}>Phạm Kiều Trinh - PH31536</Text>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{  marginRight:20,backgroundColor:'lightblue',padding:10,borderRadius:15, fontWeight: 'bold', color: 'white'}}>Popular</Text>
        <Text style={{marginRight:20 ,padding:10,fontWeight: 'bold', color: 'white' }}>Product Design</Text>
        <Text style={{ marginRight:20,padding:10,fontWeight: 'bold', color: 'white'}}>Development</Text>
        <Text style={{ padding:10,fontWeight: 'bold', color: 'white' }}>Project File</Text>

        </View>
      </Animated.View>

      <Animated.View style={[headerStyle]}>
      <Text style={styles.listHeader}>Popular Quizes</Text>
      <AnimatedFlatList
        contentContainerStyle={styles.scrollViewContent}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        data={[
          
          'Design System',
          'React Native 101',
          'Agile Basics',
          
          
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      </Animated.View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: 40,
    paddingBottom: 10,
    paddingLeft: 20,
    
  },
  scrollViewContent: {
    paddingTop: 5,
    height:750
  },
  listHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  item: {
    padding: 20,
    fontSize: 18,
    margin: 30,
    height: 100,
    color:'black',
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  fixedText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'green',
    fontSize: 16,
    paddingLeft: 20,
  },
});

export default App;
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import PH31536_bai31 from './demoCom/PH31536_bai31'
// import PH31536_bai32 from './demoCom/PH31536_bai32'

// const App = () => {
//   return (
//     <View>
//      {/* <PH31536_bai31/> */}
//      <PH31536_bai32/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})








