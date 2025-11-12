# Next.js Template

This is a template for creating Next.js applications.

Your project has been successfully created!

## What's Next?

Now that your project is set up, here are a few things you can do to get started:

1.  **Start the development server:**

    ```bash
    pnpm dev
    ```

    Your application will be running at `http://localhost:3000`!

2.  **Explore the project structure:**

    The main application logic is located in the `app` directory. The API routes are defined in `app/api`, and the main application setup is in `app/layout.tsx` and `app/page.tsx`.

3.  **Review the available scripts:**

    Check out the "Available Scripts" section below to see what commands you can run.

## Available Scripts

-   `pnpm dev`: Starts the development server.
-   `pnpm build`: Builds the application for production.
-   `pnpm start`: Starts the production server.
-   `pnpm lint`: Lints the codebase.

## Authentication

This template comes with NextAuth.js pre-configured. The authentication routes are handled by the `app/api/auth/[...nextauth]/route.ts` file.

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
