import { useEffect, useState } from 'react';
import Link from 'next/link';

import Blogs from '@/components/Atoms/Blogs';
import { getBlogList } from '@/utils/api';


const RecentBlogs: React.VFC = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getBlogList(setArticles)
  }, [])
  const title: string = "Recently Posted Blogs"

  return (
    <>
      <Blogs title={title} articles={articles} />
      <p className='text-blue-400 text-base'><Link href="/blogs">more</Link></p>
    </>
  )
}

export default RecentBlogs
