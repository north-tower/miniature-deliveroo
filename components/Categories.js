import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }} showsHorizontalScrollIndicator={false}
    >
       <CategoryCard id={23} imgUrl="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
         title="Modern" rating={9.5} genre="Material" 
         short_description="Modern design features clean lines, simple forms, and a focus on function and practicality. It often incorporates materials like glass, metal, and concrete." dishes={[]} long={10} lat={0} />
        <CategoryCard id={13} imgUrl="https://images.unsplash.com/photo-1478606604719-cce9b0e91569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYWRpdGlvbmFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
         title="Traditional" rating={4.5} genre="European"  
         short_description="This style draws inspiration from classic European designs and is characterized by ornate details, rich colors, and formal furniture arrangements." dishes={["sushi","pizza"]}
          long={10} lat={0} />
        <CategoryCard id={24} imgUrl="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
         title="Minimalist" rating={9.0} genre="Simple"
         short_description="Emphasizes simplicity, clean spaces, and a less is more approach, with a focus on essential elements and clutter-free interiors." dishes={[]} long={10} lat={0} />
       <CategoryCard id={32} imgUrl="https://images.unsplash.com/photo-1597498178146-3e9378203bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kdXN0cmlhbCUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
         title="Industrial" rating={4.0} genre="German" address="Main Str" 
         short_description="Incorporates raw, unfinished elements like exposed brick, metal accents, and vintage-inspired furniture to create a utilitarian and edgy feel." dishes={[]} long={10} lat={0} />

       
         <CategoryCard id={13} imgUrl="https://images.unsplash.com/photo-1600493505371-f2f6153dbb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGJvaGVtaWFuJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
         title="Bohemian" rating={4.5} genre="American" address="Main Str" 
         short_description="Embraces a free-spirited, eclectic mix of patterns, colors, and global influences, creating a vibrant and artistic atmosphere." dishes={[]} long={10} lat={0} />
        
        <CategoryCard id={14} imgUrl="https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJ1c3RpYyUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
         title="Rustic" rating={7.5} genre="Earthy"
         short_description=" Rustic design embraces a warm, earthy feel with natural materials, exposed wood, and a cozy, country-inspired atmosphere." 
         dishes={["Thai Rice","Greens"]} long={10} lat={0} />

      
    
    
    </ScrollView>

      
  )
}

export default Categories

const styles = StyleSheet.create({})