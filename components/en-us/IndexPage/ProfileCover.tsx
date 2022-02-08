import Image from 'next/image';
import ProfilePhoto from '@/public/profile.jpg'


const ProfileCover: React.VFC = () => {
  return (
    <>
      <Image src={ProfilePhoto} objectFit="contain" />
      {/* <img src='_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fprofile.b774a23dfbf924eb56905471b0adfc4f.jpg&w=1920&q=75' /> */}
    </>
  )
}

export default ProfileCover
