import React from 'react';
import 'emoji-mart/css/emoji-mart.css';

interface Article {
  title: string,
}

interface Props {
  readonly title: string,
  readonly articles: Article[],
}

const Blogs: React.FC<Props> = ({
  title,
  articles,
}: Props) => (
  <div className="blogs">
    <h3 className="font-mono text-base font-bold pt-10 pb-3">{title}</h3>
    <hr className="my-2" />
    <ul className="list-disc">
      {articles.map((article: Article) =>
        <li className="list-none text-sm py-2">{article.title}</li>
      )}
    </ul>
  </div>
)

export default Blogs
