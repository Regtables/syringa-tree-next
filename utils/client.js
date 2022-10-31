import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'j312vngn',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: 'skhAaUj7oDxbdQN1jVyabdCsVyhabY7C9loukt5hf1xh1EoAfasu1pjP2hQE8uVJ5FEDDiU0ao3W1qIRlajHWPTBj0VTnqDQ4cd08c0f7rP9Cf7E8WWKsLCRpkHiVjgHCVh8cuYgA52C3nIg9uhhoNqFPeTsp1eTZjrLgelFKArOdQZWcZoZ'
})