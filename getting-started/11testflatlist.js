import React, {Component} from 'react';
import {FlatList, AppRegistry, StyleSheet, View, Text, Image, TouchableHighlight, TouchableOpacity, Alert} from 'react-native';

export default class TestFlatList extends Component{
  _onPressCard(text){
    Alert.alert('Hey I am ' + text);
  }
  render(){
    let card = [
      {'key': 'panda',
        'title': 'Cute Panda',
        'uri': 'https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=1400',
      },
      {'key': 'penguin',
       'title': 'The Colonel',
        'uri': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Nils_Olav_wide.jpg/220px-Nils_Olav_wide.jpg',
      },
      {'key':'anoa',
       'title': 'The Maestro',
       'uri': 'https://satujam.com/wp-content/uploads/2015/05/lagutradisionalsunda.weebly.com_.jpg',
      }
    ]
    return(
      <View style={styles.container}>
        <FlatList data={card}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
            <TouchableOpacity underlayColor="white" onPress={() => this._onPressCard(item.key)}>
              <View style={styles.card}>
                <Image source={{uri: item.uri}} style={styles.imageCard}/>
                <Text style={styles.titleCard}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  card: {
    height: 300,
    width: 250,
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  imageCard: {
    height: 200,
    width: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  titleCard: {
    fontSize: 24,
  }
});
