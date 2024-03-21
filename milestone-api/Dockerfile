# Use the official Node.js 18 image as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . . 

# Compile TypeScript
RUN npm run build

EXPOSE 3001

# Start the server
CMD [ "npm", "start" ]
