# declearing the source 
FROM node:14

# create an app directory
WORKDIR /tripflexApp

# copy everything inside of the package.json and jsonlock into the docker
COPY package*.json ./

# Run npm install
RUN npm install

# Copy and bundle the rest packages e.g model routes etc
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
