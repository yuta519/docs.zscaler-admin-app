import Blogs from '@/components/Atoms/Blogs';


const RecentBlogs: React.VFC = () => {
  const title: string = "Recently Posted Blogs"
  const articles: { title: string }[] = [
    {
      title: "Software Engineer in Japan"
    },
    {
      title: "Live in Tokyo"
    },
    {
      title: "Javascript, Typescript, React, Next.js",
    },

  ]
  return (
    <Blogs title={title} articles={articles} />
  )
}

export default RecentBlogs
