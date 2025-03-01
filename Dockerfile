# Use an official Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) first
COPY package.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy all project files to the container
COPY . .

# Expose the application port (update this if your app uses a different port)
EXPOSE 3000

# Command to start the application
CMD ["node", "server.js"]
