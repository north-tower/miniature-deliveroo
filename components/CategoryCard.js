import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import tw from "tailwind-react-native-classnames"
import { useNavigation } from '@react-navigation/native'


const CategoryCard = ({ 
  id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={tw`relative mr-2`} 
    onPress={() => {
      navigation.navigate("Resturant", {id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat,
      });
  }}
    >
        <Image source={{
            uri: imgUrl,
        }}
        style={tw` h-20 w-20 rounded`}
        />
        <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>
            {title}
        </Text>

    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})