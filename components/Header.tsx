import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'


export default function Header() {
    return (
        <>
            <header>
                <title>yuta519.github.io</title>
            </header>
            <AppBar position="static" color="secondary">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Yuta Kawamura
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

