import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from "tailwind-react-native-classnames"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { UserIcon, ChevronDownIcon } from 
"react-native-heroicons/outline"
import FeaturedRow from '../components/FeaturedRow';

import { AdjustmentsHorizontalIcon } from 'react-native-heroicons/solid';
import  { MagnifyingGlassCircleIcon } from 'react-native-heroicons/outline';


import {CameraIcon } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native';
import Categories from '../components/Categories';
import client from '../sanity';






const HomeScreen = () => {

    const navigation = useNavigation();
    const [ featuredCategories, setFeaturedCategories ] = useState([]);

    useEffect(() => {
        client.fetch(
            'https://mkgghndz.api.sanity.io/v2021-10-21/data/query/production?query=%20*%5B_type%20%3D%3D%20%22featured%22%5D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resturants%5B%5D-%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20dishes%5B%5D-%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D'
        ).then((data) => {
            setFeaturedCategories(data);
    console.log( featuredCategories)

        });
    }, []);


    
  return (
    <SafeAreaView style={tw`bg-white h-full pt-5`}>
     <View style={tw`flex-row pb-3 items-center mx-4  `}>
        <Image 
        source={{
            uri: "https:links.papareact.com/wru/"
        }}
        style={tw`h-7 w-7 bg-gray-500 p-4 rounded-full`}
        />
        <View style={tw`flex-1`}>
            <Text style={tw`font-bold text-gray-300 text-xs`}>
                Deliver Now!
            </Text>
            <Text style={tw`font-bold text-xl`}>Current Location
                <ChevronDownIcon  color="#00CCBB" />
            </Text>
        </View>
        <UserIcon  color="#00CCBB" />
     </View>
        <View style={tw`flex-row items-center pb-2 mx-4`}>
            <View style={tw`flex-row flex-1 bg-gray-200 p-3 rounded-full `}>
                <MagnifyingGlassCircleIcon color="gray"  />
                <TextInput placeholder='Resturants and Cuisines' />
            </View>

            <AdjustmentsHorizontalIcon  color="#00CCBB" />
        </View>

        <ScrollView>
            <Categories />

            <FeaturedRow title="Featured" description="Paid placements from our partners"
            id="1" />

            
            <FeaturedRow title="Tasty Discounts" 
            description="Everyone's been enjoying these juicy discounts"
            id="2" />
            
            <FeaturedRow title="Offers near you"
             description="Why not support loac resturants tonight!"
            id="3" />

        </ScrollView>


            
        
    </SafeAreaView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });