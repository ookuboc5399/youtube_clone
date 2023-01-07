import { Card, CardContent, dividerClasses, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoVideoUrl } from '../utils/constants'

const VideoCard = () => {
  return (
    <div>test</div>
    // <Card sx={{width:{xs:'100%', sm:'358px', md:'320px'}, boxShadow:"none", borderRadius:0}}>
    //     <Link>
    //     </Link>
    //     <CardContent>
    //         <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
    //         <Typography variant='subtitle1' >
    //             {snippet?.title.slice(0,60)}
    //         </Typography>
    //         </Link>

    //     </CardContent>
    // </Card>
  )
}

export default VideoCard

// {video:{id:{videoId},snippet}}