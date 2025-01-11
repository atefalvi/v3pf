# Stage 1: Build the app
FROM node:18-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nuxt 3 app
RUN npm run build

# Stage 2: Run the app
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the .output folder from the builder stage
COPY --from=builder /app/.output ./

# Expose the port Nuxt runs on
EXPOSE 3000

# Start the Nitro server
CMD ["node", "server/index.mjs"]