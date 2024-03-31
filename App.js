import { StatusBar } from 'expo-status-bar';
import {useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(false)


  return (
    <View style={styles.container}>
      {url? ( 
      <View style={styles.imageBackground}> 
      <Image onLoadEnd={()=> setLoading(false)}
            onLoadStart={()=> setLoading(true)}
            style = {styles.image}
            width={200}
            height={200}
            source = {{uri:url}}
            />
            {loading && (<ActivityIndicator size={'large'} color={"red"}/>)}
          </View>
        ): null} 
      <View style = {styles.buttons}>
        <Button title='image1' onPress={()=> setUrl("https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=")}></Button>
        <Button title='image2' onPress={()=> setUrl("https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg")}></Button>
        <Button title='image3' onPress={()=> setUrl("https://static.vecteezy.com/system/resources/thumbnails/007/234/162/small_2x/bengal-cat-resting-on-the-couch-funny-with-glasses-photo.jpg")}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
    flexDirection: 'row',
    gap:40
  },
  imageBackground:{
    marginBottom:30,
    borderWidth: 1,
    borderRadius:30,
    width: 250
  },
  image:{
    resizeMode: "contain",
    borderWidth:30

  }
});
