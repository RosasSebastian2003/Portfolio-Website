FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies for node-gyp (needed for some native modules)
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies with clean install
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port (Coolify will handle the serving)
EXPOSE 3000

# Serve with vite preview
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
