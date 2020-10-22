import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_8: "" }

  render = () => (
    <View>
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        maximumTrackTintColor="#f7a1f4"
        minimumTrackTintColor="#a5e88c"
        thumbTintColor="#031035"
        style={styles.Slider_2}
      />
      <Slider
        value={50}
        minimumValue={0}
        maximumValue={100}
        maximumTrackTintColor="#f7a1f4"
        minimumTrackTintColor="#a5e88c"
        thumbTintColor="#031035"
        style={styles.Slider_3}
      />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Text>Sample text content</Text>
      <Text>Sample text content</Text>
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_8}
        onChangeText={nextValue => this.setState({ TextInput_8: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Slider_2: { width: "100%" },
  Slider_3: { width: "100%" },
  Button_4: {},
  Text_5: {},
  Text_6: {},
  Text_7: {},
  TextInput_8: {}
})
