# Use an official Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json first (to take advantage of Docker caching)
COPY package.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the entire project into the container
COPY . . 

# Ensure the server file exists
RUN ls -l /usr/src/app/

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
