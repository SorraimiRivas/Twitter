import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import tweets from "../assets/data/tweets";
import { TypeTweet } from "../types";
import { Entypo } from "@expo/vector-icons";
import IconButton from "./IconButton";

type TweetProps = {
  tweet: TypeTweet;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.tweetContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username} ·2h</Text>
          <Entypo
            name="dots-three-vertical"
            size={16}
            color="grey"
            style={{ marginLeft: "auto" }}
          />
        </View>
        <Text style={styles.content}>{tweet.content}</Text>
        {tweet.image && <Image src={tweet.image} style={styles.image} />}
        <View style={styles.footer}>
          <IconButton text={tweet.numberOfComments} icon="comment" />
          <IconButton text={tweet.numberOfLikes} icon="heart" />
          <IconButton text={tweet.numberOfRetweets} icon="retweet" />
          <IconButton text={tweet.impressions || 0} icon="chart" />
          <IconButton icon="share-google" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },

  tweetContainer: {
    marginLeft: 10,
    flex: 1,
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  name: {
    fontWeight: "500",
  },

  username: {
    color: "grey",
    marginLeft: 5,
  },

  content: {
    lineHeight: 20,
  },

  image: {
    width: "100%",
    marginVertical: 5,
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },

  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },

  footerText: {
    fontSize: 12,
    marginLeft: 3,
    color: "grey",
  },
});

export default Tweet;
