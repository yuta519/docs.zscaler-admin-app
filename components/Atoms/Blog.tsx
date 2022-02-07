import React, { useEffect, useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';

import { remark } from 'remark';
import html from 'remark-html';

interface Props {
  readonly markdown_path: string,
}

const Blog: React.FC<Props> = ({ markdown_path }: Props) => {
  const [article, setArticle] = useState("")
  useEffect(() => {
    (async () => {
      const result = await remark().use(html).process(markdown_path)
      console.log(typeof result)
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
