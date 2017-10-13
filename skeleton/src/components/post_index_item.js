import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';

class PostIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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

    const { thumbnailStyle,
      headerContentStyle,
      headerTextStyle,
      thumbnailContainerStyle,
      imageStyle
    } = styles;

    return (
      <Card>
        <CardSection>
          <View style={headerContentStyle}>
            <Text>{this.props.post.category}</Text>
            <Text style={headerTextStyle}>{this.props.post.title}</Text>
          </View>

        </CardSection>
        <CardSection>
          <Image
            style={imageStyle}
            source={ { uri: this.props.post.img } } />
        </CardSection>
        <CardSection>
          <Button>
            Answer
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default PostIndexItem;
