/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ViewPadding, ViewWhite} from './src/components/index'

// const App = () => {
//   return (
//     <>
//       {/* bar diatas aplikasi */}
//       <StatusBar barStyle="light-content" />
//       <SafeAreaView>
//         {/* code untuk yang di scroll */}
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             // view = div
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>ASD</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const ViewPadding = (props) => {
//   return (
//     <View style={{...props.style, paddingHorizontal: 20}}>
//       {props.children}
//     </View>
//   )
// }

// const ViewWhite = (props) => {
//   return (
//     <View style={{
//       ...props.style,
//       backgroundColor: 'white',
//       elevation: 10,
//       borderRadius: 10,
//       width: 250,
//       height: 60,
//       justifyContent: "center",
//       alignItems: "center",
//       marginHorizontal: 10
//     }}>
//       {props.children}
//     </View>
//   )
// }

const App = () => {
  const [data] = useState([1,2,3,4 ])

  const RenderSquare = () => {
    return data.map((val, index) => {
      if (index % 2 == 0) {
        return (
          <TouchableWithoutFeedback key={index} onPress={() => console.log(val)} >
            <View style={{flexBasis: '50%', paddingRight: 2, paddingVertical: 5}}>
              <Image
                style={{
                  height: 200,
                  width: '100%',
                  borderRadius: 5,
                }}
                source={require('./assets/astronaut.jpeg')} />
            </View>
          </TouchableWithoutFeedback>
        )
      }else {
        return (
          <TouchableWithoutFeedback key={index} onPress={() => console.log(val)} >
            <View style={{flexBasis: '50%', paddingLeft: 2, paddingVertical: 5}}>
              <Image
                style={{
                  height: 200,
                  width: '100%',
                  borderRadius: 5,
                }}
                source={require('./assets/computer.jpeg')} />
            </View>
          </TouchableWithoutFeedback>
        )
      }
    })
  }

  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{backgroundColor: "#ca2c37"}}>
          <ViewPadding 
            style={{paddingVertical: 40}}>
            <Text style={{color: "white", fontSize: 11}} >
              Google, inc
            </Text>
            <View style={{flexDirection: 'row'}} >
              <View style={{flex: 3}} >
                <Text style={{color: "white", fontSize: 22, fontWeight: "700"}} >
                  Laura Holmes
                </Text>
                <Text style={{color: "white", fontSize: 11}} >
                  Software Engineer
                </Text>
              </View>
              <View style={{flex: 1}}>
              <Image 
                source={{uri: 'https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}}
                style={{width: 60, height: 60, borderRadius: 30}} />
              </View>
            </View>
            <View style={{
              backgroundColor: "white",
              flexDirection: 'row',
              elevation: 10,
              marginTop: 20,
              flexWrap: 'wrap',
              borderRadius: 10}} >
              <View style={styles.square1}>
                <Text>
                  1
                </Text>
              </View>
              <View style={styles.square1} >
                <Text>
                  2
                </Text>
              </View>
              <View style={styles.square1} >
                <Text>
                  3
                </Text>
              </View>
              <View style={styles.square1} >
                <Text>
                  4
                </Text>
              </View>
              <View style={styles.square1} >
                <Text>
                  5
                </Text>
              </View>
              <View style={styles.square1} >
                <Text>
                  6
                </Text>
              </View>
            </View>
          </ViewPadding>
          <View>
            <ScrollView
            horizontal
            style={{
              marginVertical: 20
            }}
            showsHorizontalScrollIndicator={false} >
              <ViewWhite>
                <Text>
                  1
                </Text>
              </ViewWhite>
              <View style={{
                backgroundColor: 'white',
                elevation: 10,
                borderRadius: 10,
                width: 250,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 10
              }}>
                <Text>
                  2
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
        
          <ViewPadding>
            <Text style={{marginVertical: 10}}>
              Manage Human Resource
            </Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {RenderSquare()}
            </View>
          </ViewPadding>
        </ScrollView>
        <View style={{
          height:50,
          flexDirection:'row',
          shadowColor: "#000",
          shadowOffset: {
            width: 1,
            height: -100,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 50,
          backgroundColor: 'yellow'
          }}>
          <View style={{width:'25%',justifyContent:"center",alignItems:'center'}}>
              <Text style={{color:'#ca2c37',fontWeight:'700'}}>Home</Text>
          </View>
          <View style={{width:'25%',justifyContent:"center",alignItems:'center'}}>
              <Text style={{color:'darkgray'}}>Icon</Text>
          </View>
          <View style={{width:'25%',justifyContent:"center",alignItems:'center'}}>
              <Text style={{color:'darkgray'}}>Icon</Text>
          </View>
          <View style={{width:'25%',justifyContent:"center",alignItems:'center'}}>
              <Text style={{color:'darkgray'}}>Icon</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

const styles =  StyleSheet.create({
  square1: {
    flexBasis: "33.3%",
    justifyContent: 'center',
    alignItems: 'center',
    height:100
  },
  square2: {
    flexBasis: "33.3%"
  },
  square3: {
    backgroundColor: 'blue',
    flex: 1
  },
  square: {
    flex: 1, //kayak col
    justifyContent: "center",
    backgroundColor: 'black',
    flexDirection: 'column'
  }
})

export default App;
