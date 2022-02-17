import React, { useEffect, useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { getBlogDetail } from '@/utils/api'

interface Props {
  readonly markdown_path: string | string[],
}

const Blog: React.FC<Props> = ({ markdown_path }: Props) => {
  const [article, setArticle] = useState("")
  useEffect(() => {
    (() => {
      getBlogDetail(markdown_path["id"], setArticle)
    })()
  }, [])

  return (
    <div id="blog" className="blog pb-20">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: article }} />
    </div>
  )
}

export default Blog
