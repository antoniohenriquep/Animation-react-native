import React, {useRef, useEffect} from 'react';
import { View , Text, StyleSheet, Animated} from 'react-native';

export default function App() {

  const larguraAnimada = useRef(new Animated.Value(0)).current
  const alturaAnimada = useRef(new Animated.Value(100)).current


  useEffect(() =>{


    //Animação em loop
    /*Animated.loop(


      //Animação solo
        Animated.timing(larguraAnimada,{
        toValue:300,
        duration:1000,
        useNativeDriver:false
      }),


      //Animação em sequencia
      Animated.sequence([
        Animated.timing(larguraAnimada,{
          toValue:100,
          duration:1000,
          useNativeDriver:false
        }),
        Animated.timing(alturaAnimada,{
          toValue:100,
          duration:1000,
          useNativeDriver:false
        }),

        //Animação em paralelo
        Animated.parallel([
          Animated.timing(larguraAnimada,{
            toValue:500,
            duration:1000,
            useNativeDriver:false
          }),
          Animated.timing(alturaAnimada,{
            toValue:300,
            duration:1000,
            useNativeDriver:false
          })
        ])
      ])
    ).start()*/
    
    Animated.timing(larguraAnimada,{
      toValue:100,
      duration:1000,
      useNativeDriver:false
    }).start()
    
  },[])

  //Faz com que a largura que está em pixel saia em porcentagem de tela, interpolando os dados
  let porcentagemLargura = larguraAnimada.interpolate({
    inputRange:[0,100], //Vai de quanto até quanto? (Entrada)
    outputRange:['0%','50%'] //Saída dos dados
  })

  return (
    <View style ={styles.container}>
     
      <Animated.View 
      style={{
        width:porcentagemLargura,
        height:alturaAnimada,
        backgroundColor:'red',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'}}>

        <Text>...</Text>
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})