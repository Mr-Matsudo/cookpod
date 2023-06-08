# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the container at /app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Expose the app on the following port
EXPOSE 3001

# Define environment variable
ENV NODE_ENV production

# Run the app when the container is started
CMD [ "npm", "start" ]