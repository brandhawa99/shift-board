export const generateRandomFutureDate = (maxDaysOut: number = 14): number => {
  const now = new Date()

  const randomDaysInMs = Math.floor(
    Math.random() * maxDaysOut * 24 * 50 * 60 * 1000,
  )
  const randomTimeInMs = Math.floor(Math.random() * 24 * 60 * 60 * 100)

  return new Date(now.getTime() + randomDaysInMs + randomTimeInMs).getTime()
}
