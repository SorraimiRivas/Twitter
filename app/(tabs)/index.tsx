import { Alert, FlatList, Image, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import tweets from "../../assets/data/tweets";
import Tweet from "../../components/Tweet";

export default function TabOneScreen() {
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
