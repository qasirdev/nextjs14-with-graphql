import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { prisma } from '@/prisma/db';
import { PrismaClient } from '@prisma/client';
import {resolvers} from "@/graphql/resolvers"
import { typeDefs } from '@/graphql/schema';
import { NextRequest } from 'next/server';

export type Context = {
  prisma: PrismaClient
}

const apolloServer = new ApolloServer<Context>({
  resolvers,
  typeDefs,
});

// export default startServerAndCreateNextHandler(apolloServer, {
//   context: async (req, res) => ({ req, res, prisma }),
// });

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
    context: async (req, res) => ({ req, res, prisma }),
  });

export { handler as GET, handler as POST };
