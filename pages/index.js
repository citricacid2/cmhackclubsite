import { Container, Box, Heading, Button, Grid } from 'theme-ui'

export default function Index() {
  return (
    <>
      <Box
        as="header"
        sx={{
          bg: 'sheet',
          pb: [4, 5],
          mb: [3, 4],
          pt: 5
        }}
      >
        <Container>
          <Heading as="h1" variant="title" color="primary">
            Hello there!
          </Heading>
          <Heading variant="subtitle">
            Welcome to Cox Mill's brand new Hack Club!
          </Heading>
        </Container>
      </Box>
      <Container>
        <Grid columns={[null, 2]}>
          <Box>
            <Heading>First Meeting 8/20</Heading>
            <p>
              We are having our first meeting on Wednesday, 8/20, and cookies may be provided! Make sure to show up, we will be coding our first websites!

            </p>
          </Box>
          <Box>
            <Heading>Join the Remind!</Heading>
            <p>
              The code is <strong>@cmhackclub</strong>. Make sure to join for
              meeting reminders, interesting events, cool hackathons, and more!
            </p>
            <Button
              onClick={() => {
                location.href = 'https://www.remind.com/join/cmhackclub'
              }}
            >
              Join Now!
            </Button>
          </Box>
          <Box>
            <Heading>Sign up soon!</Heading>
            <p>
              Make sure to fill out this Google Form to sign up for the club!
              Deadline coming soon...
            </p>
            <Button variant="outline">Coming Soon</Button>
          </Box>
          <Box>
            <Heading>Become an Officer</Heading>
            <p>We are looking for club officers! Multiple officer positions available. Deadline coming soon...</p>
            <Button variant="outline">Coming Soon</Button>
          </Box>
        </Grid>
      </Container>
    </>
  )
}
