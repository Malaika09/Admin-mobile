import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, Pressable, TouchableOpacity, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';

const homescreen = ({ navigation }) => {
  return(
    <View style = {{backgroundColor: 'white', height: '100%'}}>

    <View style={styles.container}>
    <TouchableOpacity  style={styles.buttons} onPress={() => navigation.navigate("productslist")}>
      <Text style= {styles.b}> MANAGE PRODUCTS </Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("employeelist")}>
      <Text style= {styles.b}> MANAGE EMPLOYERS </Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("orderlist")}>
      <Text style= {styles.b}> MANAGE ORDERS </Text>
      </TouchableOpacity>

    </View>
      
    </View>
  );
}

const productslist = ( { navigation } ) =>{
 const [list, setlist] = useState([
    {
      id: 1,
      img:
        'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg',
      name: 'Pizza',
      price: '2000',
      category: 'Food',
    },
     {
      id: 2,
      img:
        'https://www.zameen.com/blog/wp-content/uploads/2019/05/image-2-27-1024x640.jpg',
      name: 'Burger',
      price: '800',
      category: 'Food',
    },
     {
      id: 3,
      img:
        'https://www.tandoorihut.com.pk/storage/2014/12/soy-sauce-noodlesH2.jpg',
      name: 'Noodles',
      price: '750',
      category: 'Food',
    },
 ]);
  return( 
     <View style = {{backgroundColor: 'white', height: '100%'}}>
     <View> 
            <View style= {styles.columns}> 
            <Text style={styles.columnhead}> Image </Text>
            <Text style={styles.columnhead}> Name </Text>
            <Text style={styles.columnhead}> Price </Text>
             </View>
      </View> 
    <ScrollView> 
      <View> 
      <View> 
          {
            list.map((item) => 
            <View  style={ styles.columns}> 
            <Text
             onPress = {() =>
              navigation.navigate('productedetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                price: item.price,
                category: item.category
              })
            }> <Image style={styles.thumbnail} source={{ uri: item.img }} /> </Text> 
            <Text style= {{lineHeight: 55}}
            onPress = {() =>
              navigation.navigate('productdetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                price: item.price,
                category: item.category
              })
            }
            > {item.name} </Text>
            <Text style= {{lineHeight: 55}}
            onPress = {() =>
              navigation.navigate('productdetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                price: item.price,
                category: item.category
              })
            }
            > {item.price} </Text>
             </View>
            ) 
          }
      </View> 
      </View>  
    </ScrollView>
    </View>
  );
}

const productdetails = ( { navigation, route } ) =>{

  return(
    <View style = {{backgroundColor: 'white', height: '100%'}}> 
       <Image style={styles.cover} source={{ uri: route.params.img}} /> 

       <View style={styles.row}>
       <Text> Product ID:  {route.params.id} </Text> 
       <Text> Name: {route.params.name} </Text> 
       </View> 

      <View  style={styles.row} > 
      <Text> Price: {route.params.price} </Text> 
       <Text> Category: {route.params.category} </Text> 
      </View>
    </View>
  );
}

const employeelist = ( {navigation }) =>{
  const[list, setlist] = useState([
     {
      id: 1,
      img:
        'https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg',
      name: 'Adnan',
      salary: '2,000',
      designation: 'A.V.P',
      shift: 'Day',
    },
     {
      id: 2,
      img:
        'https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg',
      name: 'Malaika',
      salary: '10,00,000',
      designation: 'CEO',
      shift: 'Day',
    },
     {
      id: 3,
      img:
        'https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png',
      name: 'Mahnoor',
      salary: '20,00,000',
      designation: 'Cleaner',
      shift: 'Day',
    },
  ]);
  return(
      <View style = {{backgroundColor: 'white', height: '100%'}}>
     <View> 
            <View style= {styles.columns}> 
            <Text style={styles.columnhead}> Image </Text>
            <Text style={styles.columnhead}> Name </Text>
            <Text style={styles.columnhead}> Salary </Text>
             </View>
      </View> 
    <ScrollView> 
      <View> 

      <View> 
          {
            list.map((item) => 
            <View  style={styles.columns}> 
            <Text
             onPress = {() =>
              navigation.navigate('employeedetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                salary: item.salary,
                shift: item.shift,
                designation: item.designation
              })
            }> <Image style={styles.thumbnail} source={{ uri: item.img }} /> </Text> 
            <Text style= {{lineHeight: 55}}
            onPress = {() =>
              navigation.navigate('employeedetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                salary: item.salary,
                shift: item.shift,
                designation: item.designation
              })
            }
            > {item.name} </Text>
            <Text style= {{lineHeight: 55}}
            onPress = {() =>
              navigation.navigate('employeedetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                salary: item.salary,
                shift: item.shift,
                designation: item.designation
              })
            }
            > {item.salary} </Text>
             </View>
            ) 
          }
      </View> 
      </View>  
    </ScrollView>
    </View>
  ); 
}

const employeedetails = ({navigation, route}) => {
  return(
     <View style = {{backgroundColor: 'white', height: '100%'}}> 
       <Image style={styles.cover} source={{ uri: route.params.img}} /> 

       <View style={styles.row}>
       <Text> Employee ID:  {route.params.id} </Text> 
       <Text> Name: {route.params.name} </Text> 
       </View> 

      <View  style={styles.row} > 
      <Text> salary: {route.params.salary} </Text> 
       <Text> Designation: {route.params.designation} </Text> 
      </View>

        <Text  style={styles.row}> shift: {route.params.shift} </Text> 
    </View>
  );
}

const orderlist =({navigation}) => {
  const[list, setlist] = useState([
     {
      id: 1,
      product: 'Pizza',
      price: 2000,
      customer: 'Malaika',
    },
     {
      id: 2,
      product: 'Burger',
      price: 800,
      customer: 'Malaika',
    },
     {
      id: 3,
      product: 'Noodles',
      price: 750,
      customer: 'Malaika',
    },
  ]);
  
return(
      <View style = {{backgroundColor: 'white', height: '100%'}}>
     <View> 
            <View style= {styles.columns}> 
            <Text style={styles.columnhead}> ID </Text>
            <Text style={styles.columnhead}> Product </Text>
            <Text style={styles.columnhead}> Bill </Text>
             </View>
      </View> 
    <ScrollView> 
      <View> 

      <View> 
          {
            list.map((item) => 
            <View  style={styles.columns}> 
            <Text
             onPress = {() =>
              navigation.navigate('orderdetails', {
                id: item.id, 
                product: item.product,
                customer: item.customer,
                price: item.price,
              })
            }> {item.id} </Text> 
            <Text 
            onPress = {() =>
              navigation.navigate('orderdetails', {
                 id: item.id, 
                product: item.product,
                customer: item.customer,
                price: item.price,
              })
            }
            > {item.product} </Text>
            <Text
            onPress = {() =>
              navigation.navigate('orderdetails', {
                id: item.id, 
                product: item.product,
                customer: item.customer,
                price: item.price,
              })
            }
            > {item.price} </Text>
             </View>
            ) 
          }
      </View> 
      </View>  
    </ScrollView>
    </View>
  ); 
}
const orderdetails =({navigation, route }) =>{
   return(
    <View style = {{backgroundColor: 'white', height: '100%'}}> 

       <View style={styles.row}>
       <Text> Product ID:  {route.params.id} </Text> 
       <Text> Product: {route.params.product} </Text> 
       </View> 

      <View  style={styles.row} > 
      <Text> Customer: {route.params.customer} </Text> 
       <Text> Bill: {route.params.price} </Text> 
      </View>
    </View>
  );

}
const Stack = createStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
    
    <NavigationContainer> 
    
      <Stack.Navigator  initialRouteName={"home"}> 
        <Stack.Screen
          name="home"
          component={homescreen}
          options={{ title: 'Home', headerTitleAlign: 'center' }}
        /> 
        <Stack.Screen
          name = "productslist"
          component={productslist}
          options={{ title: 'Products', headerTitleAlign: 'center' }}
        />
        <Stack.Screen 
          name = 'productdetails'
          component = {productdetails}
           options={{ title: 'Product details', headerTitleAlign: 'center' }} />
          <Stack.Screen 
          name = "employeelist"
          component = {employeelist}
          options={{ title: 'Employees', headerTitleAlign: 'center' }} 
        />
          <Stack.Screen
          name = "employeedetails"
          component = {employeedetails}
          options={{ title: 'Employee Detail', headerTitleAlign: 'center' }} 
        />

        <Stack.Screen
        name= "orderlist"
        component = {orderlist}
        options={{ title: 'Orders', headerTitleAlign: 'center' }} 
        />
        <Stack.Screen
        name= "orderdetails"
        component = {orderdetails}
        options={{ title: 'Orders Details', headerTitleAlign: 'center' }} 
        />
     
      </Stack.Navigator>
    </NavigationContainer>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttons:{
    marginTop: 20, 
    marginBottom: 20,
    alignItems: 'center',
  },
  b: {
    color: 'white',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 25,
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  }, 
  columnhead: {
    fontWeight: 'bold',
    lineHeight: 30,

  },
  thumbnail: {
    width: 50,
    height: 50,
  },
  cover: {
    width: '100%',
    height: 200,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  }
  
 
});