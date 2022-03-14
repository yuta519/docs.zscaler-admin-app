import { useEffect, useState } from 'react';
import Link from 'next/link';

import Blogs from '@/components/Atoms/Blogs';
import { getBlogList } from '@/utils/api';


const RecentBlogs: React.VFC = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    getBlogList(setArticles)
  }, [])
  const title: string = "Recent Blogs"

  return (
    <div className="md:visible sm:invisible">
      <Blogs title={title} articles={articles} />
      <p className='text-blue-400 md:text-base sm:text-xs'><Link href="/blogs">more</Link></p>
    </div>
  )
}

export default RecentBlogs
