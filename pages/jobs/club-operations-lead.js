import { BaseStyles, Box, Container, Heading, Text } from 'theme-ui'
import Head from 'next/head'
import Nav from '../../components/nav'
import Meta from '@hackclub/meta'
import JobDescription from '../../components/jobs/club-operations-lead/jd.mdx'
import ForceTheme from '../../components/force-theme'

const Page = () => (
  <>
    <Meta
      as={Head}
      title="Club Operations Lead"
      description="Hack Club is a hiring a Club Operations Lead to join our team in Shelburne, Vermont."
      image="https://workshop-cards.hackclub.com/Clubs%20Operations%20Lead%20%40%20Hack%20Club.png?fontSize=200px&brand=HQ"
    />
    <ForceTheme theme="light" />
    <Nav />
    <Box
      as="section"
      sx={{
        pt: [5, 6],
        pb: [4, 5],
        backgroundImage: theme => theme.util.gx('red', 'yellow')
      }}
    >
      <Container sx={{ textAlign: 'center', color: 'white' }}>
        <Heading as="h1" variant="title" mb={30}>
        Club Operations Lead @&nbsp;Hack&nbsp;Club
        </Heading>
        <Text variant="headline" sx={{ fontWeight: 400 }}>
          New job open as of April 12th, 2022.
        </Text>
      </Container>
    </Box>
    <Container
      as={BaseStyles}
      variant="copy"
      sx={{
        pt: [3, 4],
        pb: [4, 5],
        fontSize: [2, 3]
      }}
    >
      <JobDescription />
    </Container>
  </>
)

export default Page
