# To manually push the dockerfile to azure
# az webapp config container set --name Allvekst --resource-group Allvekst_group --docker-custom-image-name drillbeary/allvekst:latest --docker-registry-server-url https://registry.hub.docker.com

#To run docker locally do
# docker pull drillbeary/allvekst:latest

# docker build -t my-app -f ./website/Dockerfile .
# docker run -p 8080:8080 -d my-app

# ---- Build Stage ----
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./website/package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY ./website/ .

# Build the React app
RUN npm run build

# ---- Run Stage ----
FROM node:16

WORKDIR /app

# Copy package.json and package-lock.json
COPY ./website/package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy the built app from the build stage
COPY --from=build /app/build ./build

# Copy server.js
COPY ./website/server.js .

# Expose port 8080
EXPOSE 8080

# Start the app
CMD [ "npm", "start" ]