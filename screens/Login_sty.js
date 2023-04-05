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
  
  
  textInput:{
  fontsize: 18,
  },
  inputContainer: {
    flex:3,
    justifyContent: 'flex-end',
    },
  containerInput:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 14,
   
  },
  Input: {
    
    width: 264,
    heigth: 38,
    borderColor: 'gray',
    fontSize: 14,
    color: '#419ED7',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 5,
    fontFamily: 'AveriaLibre-Bold',
    
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
