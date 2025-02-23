# Use an official JDK image
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy the built JAR file (Make sure your `target/*.jar` exists!)
COPY target/*.jar app.jar

# Expose port
EXPOSE 8080

# Start the backend
CMD ["java", "-jar", "app.jar"]
