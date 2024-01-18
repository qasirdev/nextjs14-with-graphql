import { gql } from "@apollo/client";

export const GET_NOVELS = gql`
  query Novels {
    novels {
      id
      image
      title
      createdAt
      authors {
        id
        name
        novelId
      }
    }
  }
`
export const GET_NOVEL = gql`
  query Novel($id: ID!) {
    novel(id:$id) {
      id
			image
			title
      authors {
				id
				name
				novelId
			}
		}
  }
`