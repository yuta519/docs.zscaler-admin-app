import Image from 'next/image'

const ProfileCover: React.VFC = () => {
  return (
    <>
      {/* <img src='https://md-host-bucket.s3.us-east-2.amazonaws.com/profile.jpg' /> */}
      <img src='https://raw.githubusercontent.com/yuta519/yuta519.github.io/main/public/profile.jpg' />
      {/* <Image src="/profile.jpg" alt="me" width="1000" height="400" /> */}
    </>

  )
}

export default ProfileCover
