import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard from './ResturantCard'

const FeaturedRow = ({id, title, description }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>
            {title}
        </Text>
        <ArrowRightIcon color="#00bbcc" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15,
      }} showsHorizontalScrollIndicator={false} style={tw`pt-4`} >
        <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1478606604719-cce9b0e91569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYWRpdGlvbmFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
         title="Traditional" rating={4.5} genre="European"  
         short_description="This style draws inspiration from classic European designs and is characterized by ornate details, rich colors, and formal furniture arrangements." 
         dishes={[
          {
            name: "Traditional Living Room",
            description: "A contemporary and stylish living room with traditional furniture and decor.With sleek lines and a minimalist color scheme, this room is the epitome of modern living.",
            price: 12.99,
            id: "1",
            image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          },
          {
            name: "Elegant Bedroom",
            description: "An elegant and sophisticated bedroom with luxurious furnishings and a cozy ambiance.This opulent space is designed to indulge your senses and provide a sanctuary for rest and relaxation.",
            price: 9.99,
            id: "2",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }
        ]}
          long={10} lat={0} />
         <ResturantCard id={14} imgUrl="https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJ1c3RpYyUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
         title="Rustic" rating={7.5} genre="Earthy"
         short_description=" Rustic design embraces a warm, earthy feel with natural materials, exposed wood, and a cozy, country-inspired atmosphere." 
        dishes ={[
  {
    name: "Rustic Living Room",
    description: "Step into a cozy and inviting rustic living room with warm wooden accents and earthy tones.",
    id: "3",
    image: "https://images.unsplash.com/photo-1519869326165-9d7e8f16807c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJ1c3RpYyUyMGxpdmVkJTIwcm9vbXxlbnwwfHwwfHx8fDE2MzE1MjIzNTY&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Rustic Kitchen",
    description: "Experience the charm of a rustic kitchen with vintage elements and natural textures. ",
    price: 10.99,
    id: "4",
    image: "https://images.unsplash.com/photo-1566938852227-66747156f3e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJ1c3RpYyUyMGtpdGNoZW4lMjByb29tfGVufDB8fDB8fHwxNjMxNTIyODAz&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
]}
long={10} lat={0} />


      </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})