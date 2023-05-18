import { Alert, FlatList, Image, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import tweets from "../../assets/data/tweets";
import Tweet from "../../components/Tweet";

const tweet = tweets[0];

export default function TabOneScreen() {
  const handleOnPress = () => {
    Alert.alert("Pressed");
  };

  return (
    <>
      <FlatList
        data={tweets}
        showsVerticalScrollIndicator={false}
        bounces={false}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
    </>
  );
}
