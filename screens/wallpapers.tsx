
import React, { useState } from 'react';
import { View, Image, StyleSheet,TouchableOpacity ,ScrollView, Text,SafeAreaView, StatusBar } from 'react-native';
import { dark1, dark2, light1, light2 } from '../aseetsExport/aseets';


export default function Wallpaper(props:any) {


    function seeWallpaper(params:any) {
        //console.log(params)

        props.navigation.navigate('Wallpaper',{
            choiceWallpaper: params
          })
    }


    const [imagesLight1, setImagesLight1] = useState(light1)   
    const [imagesLight2, setImagesLight2] = useState(light2)   
    const [imagesDark1, setImagesDark1] = useState(dark1)   
    const [imagesDark2, setImagesDark2] = useState(dark2)   
    
console.log(light2[0].image)
    return (
        <SafeAreaView>
            <StatusBar hidden />
            <View style={styles.container}>
                <View style={{backgroundColor:"rgba(0,0,0,0.1)"}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        imagesLight1.map((image:any, index)=>{
                            return <TouchableOpacity key={image.id} 
                                onPress={() => seeWallpaper({album:"light1", id: index})}>
                                <Image  resizeMode={'cover'}  style={styles.tinyLogo} source={image.image}/>
                                </TouchableOpacity>})
                    }
                    </ScrollView>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        imagesLight2.map((image:any, index)=>{
                            return <TouchableOpacity key={image.id} 
                            onPress={() => seeWallpaper({album:"light2", id: index})}>
                                <Image resizeMode={'cover'}  style={styles.tinyLogo} source={image.image}/>
                                </TouchableOpacity>})
                    }
                    </ScrollView>
                </View>
                <View style={styles.lightDarkContainer}>
                    <View style={{
                        backgroundColor: 'rgba(0,0,0,0.1)', 
                        paddingHorizontal:50,
                        paddingVertical:3, 
                        marginBottom:5,
                        borderBottomLeftRadius:15,
                        borderBottomRightRadius:15,
                        }}>
                        <Text>Light</Text>  
                    </View>
                    <View style={{
                        backgroundColor: 'rgba(0,0,0,0.3)', 
                        paddingHorizontal:50,
                        paddingVertical:3, 
                        marginBottom:0,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        marginTop:5
                        }}>
                        <Text style={{color:"white", fontWeight:"500"}} >Dark</Text>
                    </View>
                </View>
                <View style={styles.darkImage}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        imagesDark1.map((image:any, index)=>{
                            return <TouchableOpacity key={image.id} 
                            onPress={() => seeWallpaper({album:"dark1", id: index})}>
                                <Image resizeMode={'cover'}  style={styles.tinyLogo} source={image.image}/>
                                </TouchableOpacity>})
                    }
                    </ScrollView>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        imagesDark2.map((image:any, index)=>{
                            return <TouchableOpacity key={image.id} 
                            onPress={() => seeWallpaper({album:"dark2", id: index})}>
                                <Image resizeMode={'cover'}  style={styles.tinyLogo} source={image.image}/>
                                </TouchableOpacity>})
                    }
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );


  
}

const styles = StyleSheet.create({
    lightDarkContainer:{backgroundColor:"white",
       // margin:5, 
        flexDirection:"row", 
        justifyContent:"space-around",
       
    },
    darkImage:{
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    mainContainer:{
        paddingTop: 50,
    },
    container: {
        marginTop:5,
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },  
    tinyLogo: {
        borderRadius: 5,
        margin:5,
        width: 140,
        height: 140,
    },
    logo: {
        width: 66,
        height: 58,
    },
  });