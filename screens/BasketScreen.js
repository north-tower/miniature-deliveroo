import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, {useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectResturant } from '../features/resturantSlice';
import { useNavigation } from "@react-navigation/native"
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid'

import tw from "tailwind-react-native-classnames"

const BasketScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);
  const [ groupedItemsInBasket, setGroupedItemsInBasket ]  = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  

  

  return (
    <SafeAreaView style={tw`flex-1 bg-white h-full pt-5`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5 bg-white `}>
          <View>
            <Text style={tw`text-lg text-black font-bold text-center`}>{resturant.title}</Text>

          </View>
          <TouchableOpacity onPress={navigation.goBack} 
          style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}>
            <XCircleIcon color="#00ccbb" height={50} width={50} />
          </TouchableOpacity>
        </View>   
  {Object.entries(groupedItemsInBasket).map(([key, items], index) => (
  
      
      <View key={key} style={tw`relative`}>      
              <Image source={{ uri: items[0]?.image }}
             style={tw`w-full h-56 bg-gray-300 p-4`} />
               <View style={tw`bg-white`}>
                <View style={tw`px-4 pt-4`}>
                    <Text style={tw`text-3xl text-black font-bold`}>{items[0]?.name}</Text>
                    
                    <Text style={tw`text-gray-500 mt-2 pb-4`}>{items[0]?.description}</Text>

                </View>
              
            </View>
            </View>
          ))}
       
       <View style={tw`p-5 mt-1 bg-white `}>        
            <Text style={tw`text-gray-500`}>To connect with our talented designers and experience the utmost flexibility, 
            reliability, and efficiency in our professional interior design services, click the button below. 
            </Text>
    
        
      </View>
        <View style={tw`p-5 bg-white  `}>
          
          <TouchableOpacity onPress={() => navigation.navigate("PreparingOrderScreen")} style={[tw`rounded-lg p-4`,  { backgroundColor: '#00CCBB' }]}>
            <Text style={tw`text-center text-white text-lg font-bold`}>Book Appointment</Text>
          </TouchableOpacity>
        
      </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen

const styles = StyleSheet.create({})