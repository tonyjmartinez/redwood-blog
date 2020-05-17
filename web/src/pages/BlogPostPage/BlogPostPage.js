// web/src/pages/BlogPostPage/BlogPostPage.js

import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  console.log('something')
  console.log('id?', id)
  return (
    <BlogLayout>
      <BlogPostCell id={id} />
    </BlogLayout>
  )
}

export default BlogPostPage
