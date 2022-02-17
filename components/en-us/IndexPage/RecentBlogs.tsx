import { useEffect, useState } from 'react';

import Blogs from '@/components/Atoms/Blogs';
import { getBlogList } from '@/utils/api';


const RecentBlogs: React.VFC = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getBlogList(setArticles)
  }, [])
  const title: string = "Recently Posted Blogs"

  return (
    <Blogs title={title} articles={articles} />
  )
}

export default RecentBlogs
