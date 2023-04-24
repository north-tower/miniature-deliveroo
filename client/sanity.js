
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'mkgghndz',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
})



export default client;
