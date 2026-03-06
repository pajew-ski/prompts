#!/usr/bin/env bash
set -e

echo "Starting Prompts (nginx) on port 8099..."
exec nginx -g "daemon off;"
