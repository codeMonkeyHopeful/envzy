import { withDefault } from "./utils.js"

// String parsing rule
export const string = () => {
  const rule = {
    parse(value, key) {
      if (value === undefined || value === null || value === "") {
        throw new Error(`${key} is required`)
      }
      return value
    }
  }

  rule.default = (def) => withDefault(rule, def)

  return rule
}

// Number parsing rule
export const number = () => {
  const rule = {
    parse(value, key) {
      if (value === undefined || value === null || value === "") {
        throw new Error(`${key} is required`)
      }

      const n = Number(String(value).trim())

      if (Number.isNaN(n)) {
        throw new Error(`${key} must be a number`)
      }

      return n
    }
  }

  rule.default = (def) => withDefault(rule, def)

  return rule
}
