import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CardComp = ({ data }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={data.owner.avatar_url}
          alt={data.name}
          borderRadius="lg"
          w="20rem"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data.name}</Heading>
          <Text>{data.language}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex spacing="2">
          <Text variant="solid" colorScheme="blue">
            {data.stargazers_count} stars
          </Text>
          <Spacer />
          <Text variant="ghost" colorScheme="blue">
            {data.forks} forks
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default CardComp;
