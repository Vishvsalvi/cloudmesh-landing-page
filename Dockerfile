FROM node:22.14.0-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
ENV NODE_ENV=production
RUN npm ci --omit=dev && npm cache clean --force

FROM base AS builder
COPY . .
RUN npm install lightningcss
RUN npm run build

FROM node:22.14.0-alpine AS runner
# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

WORKDIR /app

# Set correct ownership for the app directory
RUN chown -R nextjs:nodejs /app

ENV NODE_ENV=production
ENV PORT=80
ENV HOST=0.0.0.0
ENV NEXT_TELEMETRY_DISABLE=1

USER nextjs

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

EXPOSE 80

CMD ["node", "server.js"]