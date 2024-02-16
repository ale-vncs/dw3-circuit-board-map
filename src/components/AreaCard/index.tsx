import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

interface AreaCardProps {
  location: string
  description: string
  imgName: string
}

export const AreaCard = ({ imgName, location, description }: AreaCardProps) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea>
        <CardMedia sx={{ height: 200 }} image={`/img/holes/${imgName}.png`} title='green iguana' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {location}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
