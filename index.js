const { Configuration, OpenAIApi } = require('openai')
const { monitorOpenAI } = require('@newrelic/openai-observability')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openAIApi = new OpenAIApi(configuration)

monitorOpenAI(openAIApi, {
  applicationName: '@jlo OpenAI example app',
  newRelicApiKey: process.env.NEW_RELIC_API_KEY
})

openAIApi.createChatCompletion({
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: 'What is Observability?' }]
}).then((response) => {
  console.log(response)
})
