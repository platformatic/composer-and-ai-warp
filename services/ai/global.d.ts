import { FastifyInstance } from 'fastify'
import { AiWarpConfig, PlatformaticApp } from '@platformatic/ai-warp'
  
declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<AiWarpConfig>
  }
}
