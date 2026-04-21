export const formatEnvError = (errors) => {
  let message = "❌ Environment validation failed\n\n"

  for (const err of errors) {
    message += `• ${err.key}\n`

    if (err.type === "required") {
      message += `  → Required but not set\n\n`
    }

    if (err.type === "invalid") {
      message += `  → Expected: ${err.expected}\n`
      message += `  → Received: ${JSON.stringify(err.received)}\n\n`
    }
  }

  return message.trim()
}
