import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from "tailwind-react-native-classnames"
import { MinusCircleIcon, PlusCircleIcon, EllipsisHorizontalCircleIcon, ChatBubbleOvalLeftEllipsisIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'




const DishRow = ( {id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();

  
  

 

  return (
    <>
     <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={[tw`bg-white border p-4 border-gray-200`, isPressed && tw`border-b-0`]}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg text-black mb-1`}>
                {name}
            </Text>
            <Text style={tw`text-gray-400`}>
                {description}
            </Text>
            <Text style={tw`text-gray-400 mt-2`}>{price}</Text>
          </View>
        
        <View>
          <Image source={{ uri: image }}   
          style={tw`h-20 w-20 bg-gray-300 p-4 `}  />
        </View>
        </View>
      </TouchableOpacity>

      {isPressed &&(
        <View style={tw`bg-white px-4`}>
          <View style={tw`flex-row items-center pb-3`}>
            <TouchableOpacity onPress={() => {
      navigation.navigate("DeliveryScreen");
  }}
             >
              <EllipsisHorizontalCircleIcon color= "gray"
              size={40} />
            </TouchableOpacity>

           

            <TouchableOpacity >
              <ChatBubbleOvalLeftEllipsisIcon size={40} color={"#00ccbb"}/>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow

const styles = StyleSheet.create({})