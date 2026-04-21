import { withDefault, withOptional } from "./utils.js"

export const string = () => {
  const rule = {
    parse(value, key) {
      if (value === undefined || value === "" || String(value).trim() === "") {
        throw new Error(`${key} is required`)
      }
      return value
    }
  }

  rule.default = (def) => withDefault(rule, def)
  rule.optional = () => withOptional(rule)

  return rule
}

// Number parsing rule
export const number = () => {
  const rule = {
    parse(value, key) {
      if (value === undefined || value === "" || String(value).trim() === "") {
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
  rule.optional = () => withOptional(rule)

  return rule
}
