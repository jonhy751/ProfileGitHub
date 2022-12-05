import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import IconGit from "../../assets/icons/iconGit.png"

import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
type UserGit = {
  avatar_url: string;
  name: string;
  id: number;
  location: string;
  bio: string;
  email: string;
  html_url: string;
  blog:string
};
export default function PageUser() {
  const [userGit, setUserGit] = useState<UserGit>();

  useEffect(() => {
    getProfile("leonardo-fabricio");
  }, []);

  async function getProfile(name: string) {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((response) => {
        if (response.message == "Not Found") {
          return;
        }

        setUserGit(response);
      });
  }
  const PAGE_WIDTH = Dimensions.get("window").width;
  return (
    <View>
      <View style={[styles.viewProfile, {}]}>
        <ImageBackground
          source={{ uri: userGit?.avatar_url }}
          style={{ width: PAGE_WIDTH, height: 300, position: "absolute" }}
          blurRadius={7}
        />
        <View style={styles.viewInfoProfile}>
          <Image
            source={{ uri: userGit?.avatar_url }}
            style={styles.imageAvatar}
          />
          <Text style={styles.nameUser}>{userGit?.name}</Text>
          <Text style={styles.nameUser}>{userGit?.location}</Text>
        </View>
        <TouchableOpacity
          style={{ position: "absolute", right: 8, bottom: 2 }}
          onPress={() => {
            Linking.openURL(`${userGit?.html_url}`);
          }}
        >
          <Image source={IconGit} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewDescription}>
        <Text style={styles.titleDescription}>Descrição do perfil</Text>
        <Text style={styles.bioUser}>{userGit?.bio}</Text>
      </View>
      <View style={styles.viewDescription}>
        <Text style={styles.titleDescription}>Contatos</Text>
        <Text style={styles.bioUser}>{userGit?.blog}</Text>
      </View>
    </View>
  );
}
