import { Typography } from '@mui/material'
import React from 'react'
import './styles.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const PortfolioHome = () => {
    return (
        <div
            className='mainContainer'
            style={{ backgroundImage: `url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}
        >
            <div className='initialsContainer'>
                <Typography variant='h2'
                    sx={{
                        letterSpacing: 2,
                        fontFamily: 'Monospace',
                        fontWeight: 600,
                        color: 'white',
                        fontSize: 20
                    }}
                >
                    AM
                </Typography>
            </div>
            <div className='headingContainer'>
                <Typography variant='h2'
                    sx={{
                        letterSpacing: 4,
                        fontFamily: 'Monospace',
                        fontWeight: 800,
                        color: 'white',
                        fontSize: '7.7vw'
                    }}
                >
                    React JS / NATIVE <br /> Developer
                </Typography>
            </div>
            <div className='bottomContainer'>
                <div style={{ width: '40%' }}>
                    <Typography variant='h2'
                        sx={{
                            letterSpacing: 2,
                            fontFamily: 'Monospace',
                            fontWeight: 400,
                            color: 'white',
                            fontSize: 16
                        }}
                    >
                        6 months plus experience working in this field, I’ll translate your needs into features to provide your product with a competitive edge.
                    </Typography>
                    <div className='connectContainer'>
                        <Typography variant='h2'
                            sx={{
                                letterSpacing: 2,
                                fontFamily: 'Monospace',
                                fontWeight: 400,
                                color: 'white',
                                fontSize: 16
                            }}
                        >
                            Check out my projects
                        </Typography>
                        <ChevronRightIcon sx={{ color: 'white' }} />
                    </div>
                </div>
                <div className='connectContainer'>
                    <ChevronLeftIcon sx={{ color: 'white' }} />
                    <Typography variant='h2'
                        sx={{
                            letterSpacing: 2,
                            fontFamily: 'Monospace',
                            fontWeight: 400,
                            color: 'white',
                            fontSize: 16
                        }}
                    >
                        Lets Connect
                    </Typography>

                </div>
            </div>
        </div>
    )
}

export default PortfolioHome