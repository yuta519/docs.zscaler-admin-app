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
      // getBlogDetail("https://md-host-bucket.s3.us-east-2.amazonaws.com/What+is+Golang+copy.txt")
      const result = await remark().use(html).process(markdown_path)
      const contentHtml: string = result.toString()
      setArticle(contentHtml)
    })()
  }, [])

  return (
    <div id="blog" className="blog">
      <div dangerouslySetInnerHTML={{ __html: article }} />
      {article}
    </div>
  )
}

export default Blog
