import Image from 'next/image';
import ProfilePhoto from '@/public/profile.jpg'


const ProfileCover: React.VFC = () => {
  return (
    <Image src={ProfilePhoto} objectFit="contain" />
  )
}

export default ProfileCover
