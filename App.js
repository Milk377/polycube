import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
  Alert,
  ScrollView
} from 'react-native';


const Approve = ({ navigation }) => {

  const ApproveAlert = () => Alert.alert(
    "사용신청",
    "OK를 누르면 신청이 완료됩니다.",
    [
      {
        text: "취소",
        onPress: () => console.log("승인요구 발생"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK pressed") }
    ], { cancelable: false }
  );

  const [value, onChangeText] = React.useState('Input ID');
  return (
    <View style={{ flex: 1, alignItems: 'center', }}>

      <TouchableOpacity style={{ marginTop: 50, marginBottom: 50 }}
        onPress={() => navigation.navigate("Message")}>
        <Image source={require('./src/images/AppleColor.png')} style={{ width: 100, height: 100 }} resizeMode="contain" />
      </TouchableOpacity>

      <TextInput
        style={{ marginTop: 50, height: 40, width: 200, borderwidth: 1, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}
        onChangeText={text => onChangeText(text)}
        value={'이름'} />

      <TextInput
        style={{ marginTop: 20, height: 40, width: 200, borderwidth: 1, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}
        onChangeText={password => onChangeText(text)}
        value={'전화번호'} />

      <TextInput
        style={{ marginTop: 20, height: 40, width: 200, borderwidth: 1, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}
        onChangeText={password => onChangeText(text)}
        value={'소속'} />


      <TouchableOpacity
        style={{ backgroundColor: "darkorange", marginTop: 20, height: 40, width: 200, alignItems: 'center', justifyContent: 'center' }}

        onPress={ApproveAlert}>

        <Text> 사용신청 </Text>
      </TouchableOpacity>
      <View style={{ borderBottomColor: 'darkorange', borderBottomWidth: 1, marginBottom: 5 }}>
        <Text>                                                    </Text>
      </View>

    </View >
  );
};

const HomeScreen = ({ navigation }) => {

  const [value, onChangeText] = React.useState('Input ID');
  return (
    <View style={{ flex: 1, alignItems: 'center', }}>

      <TouchableOpacity style={{ marginTop: 50, marginBottom: 50 }}
        onPress={() => navigation.navigate("Message")}>
        <Image source={require('./src/images/AppleColor.png')} style={{ width: 100, height: 100 }} resizeMode="contain" />
      </TouchableOpacity>

      <TextInput
        style={{ marginTop: 50, height: 40, width: 200, borderwidth: 1, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}
        onChangeText={text => onChangeText(text)}
        value={value} />

      <TextInput
        style={{ marginTop: 20, height: 40, width: 200, borderwidth: 1, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}
        onChangeText={password => onChangeText(text)}
        value={'password'} />


      <TouchableOpacity
        style={{ backgroundColor: "darkorange", marginTop: 20, height: 40, width: 200, alignItems: 'center', justifyContent: 'center' }}

        onPress={() => navigation.navigate("Message")}>

        <Text> Login</Text>
      </TouchableOpacity>
      <View style={{ borderBottomColor: 'darkorange', borderBottomWidth: 1, marginBottom: 5 }}>
        <Text>                                                    </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Approve")}>
        <Text> 사용 신청 </Text>
      </TouchableOpacity>



    </View >
  );
};

const MessageScreen = ({ navigation }) => {
  return (
    <View stlye={{ flex: 1 }}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          title="새로고침"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="로그아웃"
          onPress={() => navigation.navigate("Home")}
        />
      </View>


      <ScrollView>



        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>
        <Text>Message ex</Text>

      </ScrollView>

    </View>

    //   <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', }}>


    //   </View>
  );
}

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'ivory',
        },
        headerTintColor: 'skyblue',
        headerTitleStyle: 'bold',
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Login',

        }} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Approve" component={Approve} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
