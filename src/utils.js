export const withDefault = (rule, defaultValue) => {
  return {
    parse(value, key) {
      if (
        value === undefined ||
        value === "" ||
        String(value).trim() === ""
      ) {
        return typeof defaultValue === "function"
          ? defaultValue()
          : defaultValue
      }

      return rule.parse(value, key)
    }
  }
}
