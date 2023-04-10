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
 bgG: {
    position: 'absolute',
    height: '100%',
    width: '100%',
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





  click: {
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'center',


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





})


export { estilos }
