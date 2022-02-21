import BlogPage from '@/components/en-us/BlogPage'
import { useRouter } from 'next/router'

export default function IndexPage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <BlogPage id={id} />
  )
}
