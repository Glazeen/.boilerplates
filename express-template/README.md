# Express Template

This is a template for creating Express.js microservices.

Your project has been successfully created!

## What's Next?

Now that your project is set up, here are a few things you can do to get started:

1.  **Start the development server:**

    ```bash
    pnpm dev
    ```

    Your application will be running at `http://localhost:3000`.

2.  **Explore the project structure:**

    The main application logic is located in the `src` directory. The API routes are defined in `src/api`, and the main application setup is in `src/app.ts`.

3.  **Review the available scripts:**

    Check out the "Available Scripts" section below to see what commands you can run.

## Available Scripts

-   `pnpm test`: Runs tests for the application.
-   `pnpm build`: Compiles the TypeScript code to JavaScript.
-   `pnpm start`: Starts the compiled application.
-   `pnpm dev`: Starts the development server with hot-reloading.

## API Endpoints

The API is versioned and available under the `/api/v1` prefix.

-   `GET /api/v1/health`: Returns the health status of the application.

## Docker

This template includes Docker support for containerizing the application.

-   `Dockerfile.hbs`: A template for the Dockerfile.
-   `compose.yml.hbs`: A template for the Docker Compose file.
-   `.dockerignore`: Specifies which files to ignore when building the Docker image.

To build and run the Docker container, you will need to have [Docker](https://www.docker.com/) installed.

1.  **Build the Docker image:**

    ```bash
    docker build -t your-project-name .
    ```

2.  **Run the Docker container:**

    ```bash
    docker run -p 3000:3000 your-project-name
    ```
