import { TrainerType } from "@/data/trainers";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Stack,
  Box,
  Heading,
  Text,
  Image,
  Card,
  CardBody,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";

const PokemonDisplay = ({ species, img, type1, name, type2 }: any) => {
  return (
    <Box w="100%" className="pkmndisplay" overflow="hidden" p={3}>
      <Stack direction="column" alignItems="center">
        <Heading as="h3" size="md">
          {name !== "" ? name : species}
        </Heading>
        <Image
          src={"/img/pokemon-box-art/pokemon (" + img + ").png"}
          alt={name !== "" ? name : species}
          w="100px"
        />
        <Text>{species}</Text>
        <Stack direction="row" justify="center" h="16px" w="100%">
          <Image
            src={"img/types/" + type1 + ".png"}
            alt={type1}
            w="45%"
            maxW="95px"
            objectFit="contain"
          />
          {type2 !== "" ? (
            <Image
              src={"img/types/" + type2 + ".png"}
              alt={type2}
              w="45%"
              maxW="95px"
              objectFit="contain"
            />
          ) : (
            <></>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

const EmptyPokemon = () => {
  return <Box w="100%" className="pkmndisplay"></Box>;
};

const Trainer = (trainer: TrainerType) => {
  return (
    <>
      <Card
        direction={{ base: "column", md: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          w={{ base: "100%", md: "250px" }}
          h={{ base: "150px", md: "inherit" }}
          src={"/img/trainers/" + trainer.name + ".jpg"}
          alt={trainer.name}
        />

        <CardBody>
          <Heading as="h2" size="lg">
            {trainer.name}
          </Heading>
          <Tabs>
            <TabList>
              {trainer.battles.map((battle) => (
                <Tab key={battle.id}>{"Battle " + battle.id}</Tab>
              ))}
            </TabList>

            <TabPanels p={0}>
              {trainer.battles.map((battle) => (
                <TabPanel key={battle.id} p={{ base: 4, md: 0 }}>
                  <SimpleGrid
                    columns={{ base: 1, lg: 6 }}
                    gap={{ base: 12, md: 0 }}
                  >
                    {battle.pkmn.map((pokemon, i) => (
                      <PokemonDisplay
                        key={i}
                        species={pokemon.species}
                        img={pokemon.imgNumber}
                        type1={pokemon.type1}
                        name={pokemon.name ? pokemon.name : ""}
                        type2={pokemon.type2 ? pokemon.type2 : ""}
                      />
                    ))}
                    {Array.from({ length: 6 - battle.pkmn.length }, (_, i) => (
                      <EmptyPokemon key={i} />
                    ))}
                  </SimpleGrid>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
};

export default Trainer;
