import { faArrowCircleLeft, faArrowLeft, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useCallback, memo, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { dark1, dark2, light1, light2 } from '../aseetsExport/aseets';



const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

let slideList = dark1 /*= Array.from({ length: 20 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
   // title: `This is the title ${i + 1}!`,
   // subtitle: `This is the subtitle ${i + 1}!`,
  };
});*/

const Slide = memo(function Slide({ data }:any) {
  return (
    <View style={styles.slide}>
      <Image source={ data.image } style={styles.slideImage}></Image>
      <Text style={styles.slideTitle}>{data.title}</Text>
      <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
    </View>
  );
});

function Pagination({ index }:any) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Wallpaper(props:any) { 

  const selectAlbum = (albumTarget:any, imageIndex:any = 0) =>{
    const album:any = {
      dark1, 
      dark2, 
      light1, 
      light2
    }
    slideList = album[albumTarget]
  }
  selectAlbum(props.route.params.choiceWallpaper.album)
  
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,

    keyExtractor: useCallback(s => String(s.id), []),

    getItemLayout: useCallback((_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  const renderItem = useCallback(function renderItem({ item }) {
    return <Slide data={item} />;
  }, []);

  return (  
    <View style={{backgroundColor:"black"}}>   
    <StatusBar hidden />
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.arrow} onPress={() => {props.navigation.navigate('Wallpapers')}}>
        <View >
          <FontAwesomeIcon style={styles.fontAwesome} icon={ faArrowLeft } /> 
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.setWallpaper}>
        <View>
          <Text style={styles.setWallpaperText}>Set as wallpaper</Text>
        </View>
      </TouchableOpacity>
    </View>
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        initialScrollIndex={props.route.params.choiceWallpaper.id   }
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      ></FlatList>
      <Pagination style={styles.paginationContainer} index={index}></Pagination>
    </View>
  );
}

const styles = StyleSheet.create({
  setWallpaperText:{
    fontSize:18,
    color:"white",

  },
  buttonsContainer:{
    zIndex:1,
    flexDirection:'row',
    justifyContent:"space-between",
    position:"absolute",
    width:"100%",
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  setWallpaper:{
    alignItems:"center",
    justifyContent:"center",
    width:150,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50
  },
  arrow:{
   
    backgroundColor: 'rgba(0,0,0,0.5)',
    width:50,
    height:50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems:"center",
    flexDirection: "row",
  },
  fontAwesome:{
    color:"white",
    
  },
  paginationContainer:{
    position: 'absolute',
    left: 0,
    top: 0,
  },
  slide: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  slideImage: { width: windowWidth * 0.99, height: windowHeight * 1 },
  slideTitle: { fontSize: 24 },
  slideSubtitle: { fontSize: 18 },

  pagination: {
    position: "absolute",
    bottom: 8,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: { backgroundColor: "lightblue" },
  paginationDotInactive: { backgroundColor: "gray" },

  carousel: { flex: 1 },
});
