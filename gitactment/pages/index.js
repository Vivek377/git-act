import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import CardComp from "../components/CardComp";

function Home({ data }) {
  return (
    <Grid
      h='200rem'
      templateRows='repeat(10, 1fr)'
      templateColumns='repeat(4, 1fr)'
      gap="4rem"
    >
      {
        data.map((ele) => (
          <GridItem key={ele.id}>
            <CardComp data={ele} />
          </GridItem>
        ))
      }
    </Grid>
  )
}

export async function getServerSideProps() {
  let r = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:all`);
  let d = await r.json();
  return {
    props: {
      data: d.items
    }
  }
}

export default Home
