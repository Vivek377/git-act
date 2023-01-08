import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CardComp from "../components/CardComp";

const Javascript = ({data}) => {
	console.log(data);
  return (
    <Grid
      h="200rem"
      templateRows="repeat(10, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap={40}
    >
      {data.map((ele) => (
        <GridItem key={ele.id}>
          <CardComp data={ele} />
        </GridItem>
      ))}
    </Grid>
  );
};

export async function getStaticProps() {
  let r = await fetch(
    `https://api.github.com/search/repositories?q=stars:%3E1+language:javascript`
  );
  let d = await r.json();
  return {
    props: {
      data: d.items,
    },
  };
}

export default Javascript;
