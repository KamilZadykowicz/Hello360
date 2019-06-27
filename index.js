import React from 'react';
import {
  AppRegistry,
  asset,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export default class Hello360 extends React.Component {

  state = {
    city: [{name: "WENECJI", img: "360_v.jpeg"}, {name: "CHICAGO", img: "360_city.jpg"}],
    cityVenice: true,
  }

  goTo = () => {
    this.setState(prevState => ({
      cityVenice: !prevState.cityVenice
    }),
    () =>
      {this.state.cityVenice ?
        Environment.setBackgroundImage(
          asset('360_v.jpeg'),
          {format: '2D'}, /* one of the formats mentioned above */
        )
        :
        Environment.setBackgroundImage(
          asset('360_city.jpg'),
          {format: '2D'}, /* one of the formats mentioned above */
        );
    }
    );
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            WITAJ W {this.state.cityVenice ? this.state.city[0].name : this.state.city[1].name} !
          </Text>
        </View>
        <View style={styles.greetingBox}>
          <VrButton onClick={this.goTo}>
            <Text>
              Przenieś się do {this.state.cityVenice ? this.state.city[1].name : this.state.city[0].name}
            </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    // width: 400,
    // height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 20,
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
