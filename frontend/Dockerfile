# Use Node.js base image
FROM node:18 AS builder


# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (to cache dependencies)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build Next.js
RUN npm run build

# Use a minimal Node.js image for production
FROM node:18 AS runner
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/public/fonts /app/public/fonts
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/node_modules /app/node_modules

# Expose port
EXPOSE 3000

# Start Next.js
CMD ["npm", "run", "start"]
