export const env = (schema) => {
  if (!schema || typeof schema !== "object") {
    throw new Error("env() expects an object schema")
  }

  const config = {}

  for (const key of Object.keys(schema)) {
    const rule = schema[key]

    if (!rule || typeof rule.parse !== "function") {
      throw new Error(
        `Invalid schema for "${key}". Expected a rule with a parse() function.`
      )
    }

    const value = process.env[key]
    config[key] = rule.parse(value, key)
  }

  return config
}
