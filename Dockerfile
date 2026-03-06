ARG BUILD_FROM
FROM ${BUILD_FROM}

# Install Bun runtime
RUN apk add --no-cache curl bash unzip \
    && curl -fsSL https://bun.sh/install | bash \
    && ln -s /root/.bun/bin/bun /usr/local/bin/bun

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source and content
COPY build.ts rdf.ts serve.ts index.ts tsconfig.json ./
COPY src/ src/
COPY content/ content/

# Build the static site
RUN bun run build.ts

# Copy the run script
COPY run.sh /run.sh
RUN chmod a+x /run.sh

# Labels
LABEL io.hass.version="1.0.0" \
      io.hass.type="addon" \
      io.hass.arch="amd64|aarch64|armv7|armhf|i386"

CMD ["/run.sh"]
