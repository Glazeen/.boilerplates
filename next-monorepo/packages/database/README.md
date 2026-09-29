# `@workspace/database`

Shared database package providing a typed Prisma 7 client, schema, and migrations for the monorepo.

## Available Scripts

- `pnpm db:generate`: Generates the Prisma client to `src/generated/prisma`.
- `pnpm db:push`: Pushes schema changes directly to the database without creating migrations.
- `pnpm db:migrate`: Runs migrations in development (`prisma migrate dev`).
- `pnpm db:studio`: Opens the Prisma Studio GUI to inspect and modify data.

## Usage

Import the initialized Prisma client anywhere in your apps:

```typescript
import { prisma, type User } from "@workspace/database"

const users = await prisma.user.findMany()
```
