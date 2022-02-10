import React, { useEffect, useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { remark } from 'remark';
import html from 'remark-html';
import { getBlogDetail } from '@/utils/api'


interface Props {
  readonly markdown_path: string,
}

const Blog: React.FC<Props> = ({ markdown_path }: Props) => {
  const [article, setArticle] = useState("")
  useEffect(() => {
    (async () => {
      await getBlogDetail(markdown_path, setArticle)
    })()
  }, [])

  return (
    <div id="blog" className="blog">
      <div dangerouslySetInnerHTML={{ __html: article }} />
    </div>
  )
}

export default Blog
