# Use the official Node.js image
FROM node:18

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

# Expose the port Nuxt runs on
EXPOSE 3000

# Start the Nitro server
CMD ["node", ".output/server/index.mjs"]