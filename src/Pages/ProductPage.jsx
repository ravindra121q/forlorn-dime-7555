import React, { useEffect, useState } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Spinner,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  HStack,
  Img,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { calcLength } from "framer-motion";
import CartPage from "./CartPage";
const ProductPage = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [sort, setSort] = useState("asc");
  const [page, setPage] = useState(1);
  const [todos, setTodos] = useState([]);
  const getData = (page, sort) => {
    setIsloading(true);
    axios
      .get(
        `http://localhost:8080/productpage?_limit=12&_page=${page}&_sort=price&_order=${sort}`
      )
      .then((res) => setData(res.data));
    setIsloading(false);
  };
  // console.log(data);
  const Carthandler = (e) => {
    const { title, image, price } = e;
    const AddnewItem = {
      title,
      image,
      price,
    };
    const newTodo = [...todos, e];
    setTodos(newTodo);
    CartPage(todos);
  };

  useEffect(() => {
    getData(page, sort);
  }, [page, sort]);
  // console.log(todos);
  return (
    <Box>
      <Box display={"flex"} p={10}>
        <Box w="10%" borderRight="1px solid blue">
          <Text>Home</Text>
          <Text>Filter by</Text>
          <Text>Price</Text>
        </Box>

        <Box p="5" textAlign={"left"} w="80%">
          <Box>
            <Text style={{ cursor: "pointer" }} fontSize={"21px"}>
              Sort By: Popular | Price :{" "}
              <span onClick={() => setSort("asc")}>Low to High</span> | Price :
              <span
                onClick={() => {
                  setSort("desc");
                }}
              >
                High to Low
              </span>{" "}
              | Discount | New Arrivals
            </Text>
          </Box>
          <Box alignItems={"center"} text="center">
            <SimpleGrid columns={[1, 2, 3, 4]}>
              {isloading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="2xl"
                />
              ) : (
                data.map((e) => {
                  return (
                    <Box key={e.id}>
                      <Card maxW="sm" key={e.id}>
                        <CardBody alignContent={"center"} textAlign="center">
                          <Image
                            src={e.image}
                            alt="Green double couch with wooden legs"
                            borderRadius="lg"
                          />
                          <Stack mt="6" spacing="3">
                            <Heading size="md">{e.title}</Heading>

                            <Text color="blue.600" fontSize="2xl">
                              ${e.price}
                            </Text>
                          </Stack>
                        </CardBody>

                        <CardFooter>
                          <ButtonGroup
                            justifyContent={"center"}
                            alignItems={"center"}
                            spacing="10"
                          >
                            <Button
                              onClick={() => Carthandler(e)}
                              ml={4}
                              variant="solid"
                              color={"white"}
                              bg="#902735"
                              w={"210px"}
                            >
                              Add to cart
                            </Button>
                          </ButtonGroup>
                        </CardFooter>
                      </Card>
                    </Box>
                  );
                })
              )}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box>
        <Button disabled={page == 1} onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button onClick={() => setPage(1)}>1</Button>
        <Button onClick={() => setPage(2)}>2</Button>
        <Button onClick={() => setPage(3)}>3</Button>
        <Button onClick={() => setPage(4)}>4</Button>
        <Button onClick={() => setPage(5)}>5</Button>
        <Button onClick={() => setPage(6)}>6</Button>
        <Button onClick={() => setPage(7)}>7</Button>
        <Button
          disabled={page == 7}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next
        </Button>
      </Box>
      <Box bg="#902735" color={"white"} mt={8} pt={8} mb={20}>
        <Box maxW={"70%"} margin="auto">
          <SimpleGrid columns={4} spacing={8}>
            <Box w={"120%"}>
              <Text>About Us</Text>
              <p>
                India's most convenient online grocery channel Buyerapp Fresh
                and Smart makes your grocery shopping even simpler. No more
                hassles of sweating it out in crowded markets, grocery shops &
                supermarkets - now shop from the comfort of your home; office,
                or on the move. We offer you the convenience of shopping for
                everything that you need for your home - be it fresh fruits &
                vegetables, rice, dals, oil, packaged food, dairy item, frozen,
                pet food, household cleaning items & personal care products from
                a single virtual store.
              </p>
              <br />
              <Text>PAYMENT OPTIONS</Text>
              <HStack spacing="24px" pl={14}>
                <Box w="40px" borderRadius={"8px"} h="40px" bg="yellow.200">
                  <Img src="https://cdn-icons-png.flaticon.com/512/1086/1086741.png" />
                </Box>
                <Box w="40px" borderRadius={"8px"} h="40px" bg="tomato">
                  <Img src="https://cdn-icons-png.flaticon.com/512/4108/4108042.png" />
                </Box>
                <Box w="40px" borderRadius={"8px"} h="40px" bg="pink.100">
                  <Img src="https://cdn-icons-png.flaticon.com/512/2058/2058414.png" />
                </Box>
              </HStack>
            </Box>
            <Box>
              <Text>OUR COMPANY</Text>
              <p>About Us</p>
              <p>Contact Us</p>
            </Box>
            <Box>
              <Text>TOP CATEGORIES</Text>
              <p>Grocery</p>
            </Box>
            <Box>
              <Text>POLICIES & INFO</Text>
              <p>Privacy Policy </p>
              <p>Terms & Condition</p>
              <p>Shipping Policy</p>
              <p>Return & Refund</p>
              <br />
              <Text>SUPPORT</Text>
              <p>For Help, send an email to customercare@dreamsvilla.com</p>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
