FROM node:15.13.0-alpine3.13

# Copy files and install dependencies.
COPY . .
RUN npm install

# Run app.
EXPOSE 3000
CMD node ./index.js
