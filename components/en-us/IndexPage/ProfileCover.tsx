import Image from 'next/image';
import ProfilePhoto from '@/public/profile.jpg'


const ProfileCover: React.VFC = () => {
  const myLoader = ({ src, width, quality }) => {
    return `https://md-host-bucket.s3.us-east-2.amazonaws.com/${src}`
  }
  return (
    <Image loader={myLoader} src='profile.jpg' width={1000} height={450} objectFit="contain" />
  )
}

export default ProfileCover
