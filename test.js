import { env } from "./src/env.js"
import { number, string } from "./src/schema.js"

// fake env values
process.env.PORT = "abc"
process.env.DATABASE_URL = ""

const config = env({
  PORT: number(),
  DATABASE_URL: string()
})

console.log(config)
