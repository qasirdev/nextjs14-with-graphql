npx create-next-app@latest
pnpm add @prisma/client

pnpm add @apollo/client @apollo/server graphql
pnpm add  @as-integrations/next
npm install react-icons --save

Steps:
1- docker-compose up
npx prisma generate
2- npx prisma generate --schema=./src/prisma/schema.prisma
3- npx prisma migrate dev --schema=./src/prisma/schema.prisma
4- npm run dev


npm run build
npm rund dev

<!--
for docker image:
https://github.com/tkssharma/t3-stack-monorepo
https://github.com/tkssharma/t3-stack-monorepo/tree/develop/apps/nextjs13-with-graphql

For mongodb PRISMA example:
https://github.com/tkssharma/bnb.tkssharma.com/blob/main/prisma/schema.prisma
https://www.youtube.com/watch?v=9G9_2a2k2Ls
-->
