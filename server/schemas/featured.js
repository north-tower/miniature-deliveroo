import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'featured Menu categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'featured Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
        name: 'resturants',
        title: 'Resturants',
        type: 'array',
      of: [{ type: "reference", to: [{ type: "resturant"}]}],
        
      }),
  ],
})
