import { Text, StyleSheet, Image } from "react-native"
const estilos = StyleSheet.create({
  main: {
    height: '100%',


  },
  logo: {
    width: 40,
    resizeMode: 'contain'
  },
  bg: {
    flex: 1,
    resizeMode: 'cover'
  },
  linear:{
    flex: 1,
  },
  
  
  login: {
    marginVertical: 10,
    flex:3,
    justifyContent: 'center',
    paddingHorizontal: 15,
    },
  loginT:{
    color: 'white',
    fontSize: 14,
    fontFamily: 'AveriaLibre-Bold',
    marginRight: 10
  },
  loginI:{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10
    },
  TextInput: {
    
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    backgroundColor: 'white',
    fontFamily: 'AveriaLibre-Bold',
    color: '#419ED7'
  },




  button: {
    text: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'AveriaLibre-Bold'

    },
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#37BD6D',
    marginVertical: 3,
    padding: 5,
    paddingHorizontal: 35,

  },
  buttonS: {
    text: {
      color: 'white',
      fontSize: 16,
      fontFamily: 'AveriaLibre-Bold'
    },
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#419ED7',
    marginVertical: 3,
    padding: 5,
    paddingHorizontal: 15,

  },
  buttonF: {
    text: {
      color: 'white',
      fontSize: 14,
      fontFamily: 'AveriaLibre-Bold'

    },
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#B0CCDE',
    marginVertical: 3,
    padding: 2,
    paddingHorizontal: 15,
  },
  title: {
    text: {

      color: '#419ED7',
      fontSize: 40,
      fontFamily: 'AveriaLibre-Bold',
      textDecorationLine: 'underline',


    },
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  home: {
    text: {
      color: '#419ED7',
      fontSize: 30,
      fontFamily: 'AveriaLibre-Bold',
      textAlign: 'center'
    },
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },

  

  click: {
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    

  }

})


export { estilos }