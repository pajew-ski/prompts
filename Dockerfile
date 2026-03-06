ARG BUILD_FROM

# Stage 1: Build static site with Node.js (not Bun – HA hosts may lack AVX)
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json ./
RUN npm install --ignore-scripts

COPY build.ts rdf.ts serve.ts index.ts tsconfig.json ./
COPY src/ src/
COPY content/ content/

RUN npx tsx build.ts

# Stage 2: Serve with nginx on HA base image
FROM ${BUILD_FROM}

RUN apk add --no-cache nginx

# Copy built static files
COPY --from=builder /app/dist /var/www/html

# Copy nginx config
COPY nginx.conf /etc/nginx/http.d/default.conf

# Copy run script
COPY run.sh /run.sh
RUN chmod a+x /run.sh

LABEL io.hass.version="1.0.3" \
      io.hass.type="addon" \
      io.hass.arch="amd64|aarch64|armv7|armhf|i386"

CMD ["/run.sh"]
