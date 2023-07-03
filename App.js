import React, { useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, TextInput } from 'react-native';

import { getAllContacts, addContact, deleteAllContact } from './realm';
function App() {
    const [contacts, setContacts] = useState(getAllContacts);
    const [counter, setCounter] = useState(contacts.length + 1);
    const [textInputValue, setTextInputValue] = useState('');
    const [textInputValue2, setTextInputValue2] = useState('');
    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:10 }}>
            <Text>{item.recordID}</Text>
            <Text>{item.givenName}</Text>
            <Text>{item.familyName}</Text>
            <Button title="Delete" onPress={() => { deleteAllContact(item.recordID); setContacts(getAllContacts); }} />
        </View>
    );
    return (
        <SafeAreaView style={{padding:20}}>
          <View style={{margin:20}}>
            <TextInput style={{ textAlign: 'center', height: 40, width: 250, borderWidth: 1, borderColor: 'green',borderRadius:5 }}
                placeholder="Name" placeholderTextColor={'grey'}
                value={textInputValue}
                onChangeText={(a) => setTextInputValue(a)}
            />
            <TextInput style={{ textAlign: 'center', height: 40, width: 250, borderWidth: 1, borderColor: 'green' }}
                placeholder="Phone No." placeholderTextColor={'grey'}
                value={textInputValue2}
                onChangeText={(a) => setTextInputValue2(a)}
            />
            </View>
            <View style={{ margin: 20, width: 250 }}>
                <Button title="Add"
                    onPress={(() => {
                        addContact(counter, textInputValue, textInputValue2, '911');
                        setContacts(getAllContacts);
                        setCounter(counter + 1);
                        setTextInputValue('');
                        setTextInputValue2('');
                    })} />
            </View>
            {/* <View style={{margin:20,width:250}}>
                <Button title="Get"/>
            </View> */}
            {/* <View style={{margin:20,width:250}}>
                <Button title="Delete"
                onPress={()=>{
                    //deleteAllContact();
                    deleteAllContact();
                    setContacts(getAllContacts);
                    //setCounter(1);
                }}/>
            </View> */}
            <View>
                <Text style={{ marginTop: 10, fontSize: 25, fontWeight: 'bold' }}>Contacts</Text>
                <FlatList
                    data={contacts}
                    keyExtractor={item => item.recordID}
                    renderItem={renderItem}
                />
            
            </View>
        </SafeAreaView>
    )
}

export default App;




// import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import realm from './realm';

// // import FirstPage from './pages/FirstPage';
// // import SecondPage from './pages/SecondPage';

// // const Stack = createNativeStackNavigator();

// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName="FirstPage">
// //         <Stack.Screen
// //           name="FirstPage"
// //           component={FirstPage}
// //           options={{
// //             title: 'First Page', //Set Header Title
// //             headerStyle: {
// //               backgroundColor: '#f4511e', //Set Header color
// //             },
// //             headerTintColor: '#fff', //Set Header text color
// //             headerTitleStyle: {
// //               fontWeight: 'bold', //Set Header text style
// //             },
// //           }}
// //         />
// //         <Stack.Screen
// //           name="SecondPage"
// //           component={SecondPage}
// //           options={{
// //             title: 'Second Page', //Set Header Title
// //             headerStyle: {
// //               backgroundColor: '#f4511e', //Set Header color
// //             },
// //             headerTintColor: '#fff', //Set Header text color
// //             headerTitleStyle: {
// //               fontWeight: 'bold', //Set Header text style
// //             },
// //           }}
// //         />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // };

// // export default App;

// export default function App() {
//   const Stack = createNativeStackNavigator();
//   return (
//   <NavigationContainer>
//     <Stack.Navigator>
//       {/* <Stack.Screen name="Menu" component={Menu} />
//       <Stack.Screen name="NextScreen" component={NextScreen} /> */}

// <Stack.Screen name="Realm" component={realm} />
//       <Stack.Screen name="fetch" component={fetch} />

//     </Stack.Navigator>
//   </NavigationContainer>
//   );
//   }