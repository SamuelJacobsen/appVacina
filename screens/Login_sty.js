import { StyleSheet } from "react-native"
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
  textInput: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'AveriaLibre-Bold',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  inputContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 14,
  },
  Input: {
    width: 300,
    height: 38,
    fontSize: 14,
    color: '#419ED7',
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 3,
    fontFamily: 'AveriaLibre-Bold',
    backgroundColor: 'white',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})




export { estilos }

