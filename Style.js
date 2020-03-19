import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30
    },
    textInput: {
      borderWidth : 1,
      borderColor: "black",
      width: "100%",
      padding: 10,
      alignSelf: "stretch" ,
      fontSize: 20
    },
    input:{
      flexDirection: "row",
      justifyContent: "space-between"
    },
    header: {
      backgroundColor: "blue",
      alignItems: "center",
      justifyContent: "center",
      borderTopWidth: 5,
      borderTopColor: "#DDD",
      borderBottomWidth: 5,
      borderBottomColor: "#DDD",
      borderStartWidth: 5,
      borderStartColor: "grey",
      borderEndWidth: 5,
      borderEndColor: "grey",
      padding: 15
    },
    headerText:{
      color: "white",
      fontSize: 25,
      padding: 15
    },
    button:{
      position: "absolute",
      right: 5,
      bottom: 5,
      width: 70,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      elevation: 8,
      backgroundColor: "grey",
    },
    textButton: {
      fontSize: 30,
    },
    todo: {
      fontSize: 18,
    }
  });