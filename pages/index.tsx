import Image from "next/image"
import { Button } from '@material-ui/core'
import { ButtonGroup } from '@material-ui/core'
import { Typography } from '@material-ui/core'

import Header from '@/components/Header'
import profileimg from '@/public/profile.jpeg'

export default function Home() {
    return (
        <>
            <Header />
            <p>
                <Typography variant="h4" component="div" gutterBottom>
                    About Me
                </Typography>

                {/* <Image src="/profile.jpeg" width={400} height={512} alt="My avatar" /> */}
                <Image src={profileimg} width={400} height={512} alt="My avatar" />
            </p>
        </>
    )
}

