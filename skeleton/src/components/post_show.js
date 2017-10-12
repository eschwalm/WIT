import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';

const PostShow = ({album}) => {
  const { thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image
          style={thumbnailStyle}
          source={{ uri: album.img }}/>
      </View>
      <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{album.description}</Text>
        <Text>{album.category}</Text>
      </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: album.img} } />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default PostShow;
