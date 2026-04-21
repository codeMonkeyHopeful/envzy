import chalk from "chalk"

const title = chalk.red.bold
const label = chalk.yellow
const detail = chalk.gray
const fail = chalk.red

const spacer = "\n"
const line = (text) => `${text}${spacer}`

export function formatEnvError(errors) {
  let message = title(line("❌ Environment validation failed"))

  for (const err of errors) {
    message += spacer
    message += label(line(`• ${err.key}`))

    if (err.type === "required") {
      message += fail(line("  → Required but not set"))
    }

    if (err.type === "invalid") {
      message += detail(line(`  → Expected: ${err.expected}`))
      message += detail(line(`  → Received: ${JSON.stringify(err.received)}`))
    }
  }

  message += spacer

  return message
}
