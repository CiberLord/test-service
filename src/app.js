// Import the framework and instantiate it
import Fastify from 'fastify'

const app = async () => {
    const fastify = Fastify({
        logger: true
    })

    // Declare a route
    fastify.get('/', async function handler(request, reply) {
        return { message: 'Привет, Мир!' }
    })

    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

export { app };