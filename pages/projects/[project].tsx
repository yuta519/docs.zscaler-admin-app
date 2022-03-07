import ProjectPage from '@/components/en-us/ProjectPage'
import { useRouter } from 'next/router'

export default function IndexPage() {
  const router = useRouter()
  const { project } = router.query

  return (
    <ProjectPage projectName={project} />
  )
}
