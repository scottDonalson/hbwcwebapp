# 1️⃣ Use Node.js as the base image for building
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (to cache dependencies)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the entire project
COPY . .

# Build Next.js (for production)
RUN npm run build

# Rebuild Tailwind (if applicable)
RUN npm run postcss


# 2️⃣ Use a minimal Node.js image for the production environment
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only necessary files from the builder
COPY --from=builder /app/.next /app/.next  # ✅ Next.js compiled build
COPY --from=builder /app/public /app/public  # ✅ Public assets (fonts, images)
COPY --from=builder /app/package.json /app/package.json  # ✅ Package.json (for runtime)
COPY --from=builder /app/node_modules /app/node_modules  # ✅ Node modules

# Expose port (Next.js default is 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
