import BlogPost from 'src/components/BlogPost'

export const QUERY = gql`
  query($id: Int!) {
    post(id: $id) {
      id
      body
      createdAt
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post }) => {
  console.log('success? ', post)
  return <BlogPost post={post} />
}
