# Use the Node.js 14 image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the necessary files and directories to the container
COPY next.config.js ./
COPY ./ ./

# Set the command to run the development server
CMD ["npm", "run", "dev"]

# Expose the port on which the Next.js app is running
EXPOSE 3000