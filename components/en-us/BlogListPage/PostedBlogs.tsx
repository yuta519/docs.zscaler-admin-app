import { useEffect, useState } from 'react';

import Blogs from '@/components/Atoms/Blogs';
import { getBlogList } from '@/utils/api';


const PostedBlogs: React.VFC = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getBlogList(setArticles)
  }, [])
  const title: string = "All posted blogs"

  return (
    <Blogs title={title} articles={articles} />
  )
}

export default PostedBlogs
