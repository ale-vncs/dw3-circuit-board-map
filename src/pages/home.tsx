import { Container, Grid } from '@mui/material'
import { AreaCard } from '@components/AreaCard'

export const Home = () => {
  const holeList = [
    {
      name: 'asuka-central-park-1',
      description: 'Role near trees and river',
      location: 'Central Park'
    },
    {
      name: 'asuka-central-park-2',
      description: 'Role near grandmother and dock',
      location: 'Central Park'
    }
  ]

  return (
    <Container>
      <Grid container spacing={2}>
        {holeList.map((hole) => {
          return (
            <Grid item>
              <AreaCard
                key={hole.name}
                description={hole.description}
                location={hole.location}
                imgName={hole.name}
              />
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}
