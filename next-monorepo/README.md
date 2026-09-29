# Next.js Monorepo Template

This is a Next.js monorepo template with Turborepo, shadcn/ui, Tailwind CSS, and optional Prisma database support.

Your project has been successfully created!

## What's Next?

Now that your project is set up, here are a few things you can do to get started:

1. **Start the development server:**

   ```bash
   pnpm dev
   ```

   Your web application will be running at `http://localhost:3000`!

2. **Explore the project structure:**

   - `apps/web`: Next.js web application.
   - `packages/database`: Shared Prisma client, schema, and migrations.
   - `packages/ui`: Shared shadcn/ui component library.
   - `packages/eslint-config`: Shared ESLint configurations.
   - `packages/typescript-config`: Shared TypeScript configurations.

3. **Review the available scripts:**

   - `pnpm dev`: Starts dev server across all workspaces via Turbo.
   - `pnpm build`: Builds all apps and packages for production.
   - `pnpm lint`: Lints all packages.
   - `pnpm format`: Formats code with Prettier.
   - `pnpm typecheck`: Typechecks all workspaces.
   - `pnpm db:generate`: Generates the Prisma client.
   - `pnpm db:push`: Pushes schema changes directly to the database.
   - `pnpm db:migrate`: Runs database migrations.
   - `pnpm db:studio`: Opens Prisma Studio GUI.

## Database (Prisma)

If Prisma was enabled during scaffolding, the `@workspace/database` package provides the shared database layer:

- Schema file: `packages/database/prisma/schema.prisma`
- Client singleton: `packages/database/src/client.ts`

### Using Prisma in Apps

Import `prisma` anywhere in `apps/web`:

```tsx
import { prisma } from "@workspace/database";

export default async function UsersPage() {
  const users = await prisma.user.findMany();
  return <div>{users.length} users found</div>;
}
```

## Adding & Using Components

### Adding components

To add shadcn components to your shared UI library, run the following command at the root:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This places the component in `packages/ui/src/components`.

### Using components

Import components into your apps from the `@workspace/ui` package:

```tsx
import { Button } from "@workspace/ui/components/button";
```

## Docker

This template includes Docker support for containerizing the Next.js web application (and PostgreSQL if Prisma is enabled).

- `Dockerfile.hbs`: Multi-stage Dockerfile leveraging Turborepo pruned builds.
- `compose.yml.hbs`: Docker Compose configuration with optional PostgreSQL container.
- `.dockerignore`: Files excluded from the build context.

### Build and Run with Docker Compose

```bash
docker compose up --build
```
