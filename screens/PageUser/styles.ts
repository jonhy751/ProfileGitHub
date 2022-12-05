import { Dimensions, StyleSheet } from "react-native";
const PAGE_WIDTH = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  nameUser:{
    color:"#fff",
    fontSize:16
  },
  bioUser:{
    color:"#000",
    fontSize:16, 
    marginTop:8,
  },
  titleDescription:{
    color:"#6365FD",
    fontSize:22, 
  },
  viewProfile:{
    alignItems:"center"
  },
  viewInfoProfile:{
    alignItems:"center",
    paddingTop:30
},
viewDescription:{
    marginTop:24, 
    paddingLeft:16
},
imageAvatar:{

  width: 200,
  height: 200,
  borderRadius: 30,
  marginBottom: 12,

}
});
