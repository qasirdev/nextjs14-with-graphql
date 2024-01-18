import { Novel, Author } from "@prisma/client";

export interface INovel extends Novel {
  authors: Author[]
}