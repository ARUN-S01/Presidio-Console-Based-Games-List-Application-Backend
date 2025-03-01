# Use official Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy everything from the project directory to the container
COPY . .

# Ensure files exist in the container
RUN ls -l /usr/src/app/

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "/usr/src/app/server.js"]
