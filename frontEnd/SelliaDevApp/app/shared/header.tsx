import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/HeaderStyle";
import users from "../../data/users.json";

const Header = React.memo(({ userData }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [sinData, setSinData] = useState(false);

  useEffect(() => {
    const findUserInfo = () => {
      const user = users.find((u) => u.id === userData);
      console.log(user,"paul");
      if (user != undefined) {
        setUserInfo(user);
      }else{
        setSinData(true);
      }

    };

    findUserInfo();
  }, [userData]);

  return (
    <View style={styles.container}>
      {userInfo ? (
        <>
          <Text style={styles.chatTitle}>{userInfo.name}</Text>
          <Text style={styles.numberClient}>{userInfo.phone}</Text>
        </>
      ) : (
        <Text style={styles.numberClient}>Cargando información...</Text>
      )}
    </View>
  );
});

export default Header;
