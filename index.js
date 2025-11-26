import { SOURCES } from './data.js'
import { extractWithAI } from './extractWithAi.js' 
console.log(SOURCES)

for (const source of SOURCES) {
  console.log(`Processing source: ${source.name}`)
  const extractedData = await extractWithAI(source.name)
  console.log(`Extracted data for ${source.name}:`, extractedData)
}

