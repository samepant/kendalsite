import {createClient} from 'contentful'

const contentfulClient = createClient({
  space: 'znuyffpmjlmw',
  accessToken: 'a89f020a09476338f4bbf9b96644e11aa6de12c252ac618d4c298511b18f090b'
})

export default contentfulClient