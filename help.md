### installation
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

### To check node version with node version manager:
node -v
nvm list
nvm ls-remote
nvm install 20.11.0
nvm use 14.5.0
<!--
for docker image:
https://github.com/tkssharma/t3-stack-monorepo
https://github.com/tkssharma/t3-stack-monorepo/tree/develop/apps/nextjs13-with-graphql

For mongodb PRISMA example:
https://github.com/tkssharma/bnb.tkssharma.com/blob/main/prisma/schema.prisma

AWS CICD
https://www.youtube.com/watch?v=9G9_2a2k2Ls
https://www.youtube.com/watch?v=a61YhcImEYw&list=PLIGDNOJWiL1-Smf4ABmuvcOrV7E4mCqN3&index=37

AWS CDK:
https://www.youtube.com/playlist?list=PLIGDNOJWiL19mNkS0cilXJPUtZxf2FhTr

Deploy Services Using Gitlab CI
https://www.youtube.com/watch?v=Im0SlkioD40&list=PLIGDNOJWiL19tboY7wTzz6_RY6h2gpNrH&index=27

Understanding Serverless Framework:
https://www.youtube.com/watch?v=pApz34vB6YU&list=PLIGDNOJWiL18ETMVbf_-ss7sAn1RcXwks

Understanding AWS Serverless:
https://www.youtube.com/watch?v=hANgEwxzCug&list=PLIGDNOJWiL19WEbSJTNwwZwMRHe7TGIPw

Starting your Journey with AWS:
https://www.youtube.com/watch?v=gr077vk_VTc&list=PLIGDNOJWiL1_J8FdXJN0DPca3kM3snG13

-->
