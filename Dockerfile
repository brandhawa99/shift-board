# --- Stage 1: Build ---
# Using the official lightweight Bun Alpine image for 2026
FROM oven/bun:1.2-alpine AS builder
WORKDIR /app

# Install dependencies first (leverages Docker layer caching)
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source and build the static site
COPY . .
RUN bun run build

# --- Stage 2: Production ---
# Discard the builder stage (keeping the final image tiny)
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

# Clean the default Nginx public folder
RUN rm -rf ./*

# Copy only the compiled static assets from the builder stage
# (Vite's default output is 'dist')
COPY --from=builder /app/dist .

# Add a custom nginx.conf to handle React Router (Client-side routing)
# See 'Essential Extras' below for this file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
