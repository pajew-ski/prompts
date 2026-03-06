#!/usr/bin/env bash
set -e

cd /app
echo "Starting Prompts server on 0.0.0.0:8099..."
exec bun run serve.ts
