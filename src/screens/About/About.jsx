import { Grid, Typography } from '@mui/material'
import React from 'react'
import './styles.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
    return (
        <Grid container
            sx={{ height: '100vh', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            className='aboutContainer'
        >
            <Grid
                md={6}
                item
                className='aboutLeftContainer'
                sx={{ display: { xs: 'none', md: 'block' } }}
            >
                <img
                    src={require('../../images/webDeveloper.jpg')}
                    alt='web developer'
                    style={{ width: '100%', height: '100%' }} />
            </Grid>
            <Grid
                md={6}
                item
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                className='aboutRightContainer'
            >
                <div></div>
                <div>
                    <Typography
                        sx={{
                            // letterSpacing: 3,
                            fontFamily: 'Monospace',
                            fontWeight: 600,
                            color: '#3978E6 ',
                            fontSize: 18
                        }}>
                        FROM IDEAS TO REALITY
                    </Typography>
                    <Typography
                        sx={{
                            letterSpacing: 2,
                            fontFamily: 'Monospace',
                            fontWeight: 800,
                            color: 'black',
                            fontSize: 25,
                            // marginTop: 1
                        }}>
                        ABOUT ME
                    </Typography>
                    <Typography
                        sx={{
                            // letterSpacing: 2,
                            fontFamily: 'Monospace',
                            fontWeight: 200,
                            color: '#737373',
                            fontSize: 16,
                            // marginTop: 1
                        }}>
                        I’ll translate your needs into features to provide your product with a competitive edge.
                        I have worked as a Software Engineer at Dukan.pk mainly working with React Native and have added bunch of features in that App and now working as a React JS developer at a product based company known as Codility Solutions and working on web flows.
                    </Typography>
                </div>

                <div className='linkedInContainer'
                    style={{ display: 'flex', flexDirection: 'row' }}
                >
                    <LinkedInIcon sx={{ color: '#3978E6' }} />
                    <Typography
                        sx={{
                            fontFamily: 'Monospace',
                            fontWeight: 600,
                            color: '#3978E6 ',
                            fontSize: 18,
                            marginLeft: 1
                        }}>
                        <a
                            target={'_blank'}
                            rel="noreferrer"
                            href='https://www.linkedin.com/in/abdul-moeed-879820229/'>
                            See my LinkedIn profile</a>

                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default About