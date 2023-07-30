import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard from './ResturantCard'

const FeaturedRow3 = ({id, title, description }) => {
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
        <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1600493505371-f2f6153dbb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGJvaGVtaWFuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
         title="Bohemian" rating={4.5} genre="American" address="Main Str" 
         short_description="Embraces a free-spirited, eclectic mix of patterns, colors, and global influences, creating a vibrant and artistic atmosphere." dishes={[]} long={10} lat={0} />
         <ResturantCard id={32} imgUrl="https://images.unsplash.com/photo-1597498178146-3e9378203bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kdXN0cmlhbCUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
         title="Industrial" rating={4.0} genre="German" address="Main Str" 
         short_description="Incorporates raw, unfinished elements like exposed brick, metal accents, and vintage-inspired furniture to create a utilitarian and edgy feel." dishes={[]} long={10} lat={0} />



      </ScrollView>
    </View>
  )
}

export default FeaturedRow3

const styles = StyleSheet.create({})