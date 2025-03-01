# Use a base image with Node.js
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /

# Clone the repository (ensure this URL is correct)
RUN git clone -b main https://github.com/ARUN-S01/Presidio-Console-Based-Games-List-Application-Backend.git /

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "server.js"]
