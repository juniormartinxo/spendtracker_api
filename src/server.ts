import { App } from './app'

const port = process.env.APP_PORT || 3333
const app = new App().express

const server = app.listen(port, () => {
  console.log(`🔥 Spendtracker rodando na porta ${port}`)
})

process.on('SIGINT', () => {
  server.close()
  console.log('🥱 hora de dormir!!!')
  process.exit(0)
})
