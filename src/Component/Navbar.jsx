import React from "react";
import {
  Box,
  Img,
  Input,
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  PopoverBody,
  Portal,
  PopoverFooter,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import LoginPage from "../Pages/LoginPage";
const Navbar = () => {
  const [city, setCity] = useState("Division");

  return (
    <div>
      <Box
        h={"58px"}
        display="flex"
        justifyContent={"space-between"}
        border="1px solid red"
      >
        <div>
          <RouterLink to="/">
            <Img
              paddingLeft={4}
              h="56px"
              w="200px"
              src={require(`../Images/logo.jpg`)}
              alt="image"
            />
          </RouterLink>
        </div>
        <Box display="flex" w={"auto"} alignItems="center">
          <Center textAlign={"center"} mt={2}>
            <Input w={"500px"} placeholder="SEARCH l Search for products " />
          </Center>
          <Popover>
            <PopoverTrigger>
              <Button bg={"white"}>
                {" "}
                <Img
                  w={4}
                  src="https://cdn-icons-png.flaticon.com/512/3179/3179068.png"
                />{" "}
                {city}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader bg="white">
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter your area,street Name"
                />
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </Box>

        <Box
          display="flex"
          alignItems={"center"}
          fontSize={"14px"}
          fontWeight={"bold"}
          justifyContent="space-between"
          padding={"13px 15px 13px 15px"}
          marginRight={5}
        >
          <SimpleGrid columns={[0, 1]}>
            <Box marginRight={2} alignItems="center" display="flex">
              <Popover>
                <PopoverTrigger>
                  <RouterLink to="/login">
                    <Button>
                      {" "}
                      <Img
                        src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
                        w={4}
                      />{" "}
                      SignIn/Register
                    </Button>
                  </RouterLink>
                </PopoverTrigger>
              </Popover>
            </Box>
          </SimpleGrid>
          <Box display="flex" marginRight={2}>
            <Img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
              w={4}
            />
            WishList |
          </Box>
          <Box display={"flex"} alignItems={"center"} textAlign="center">
            {" "}
            <Img
              src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png"
              w={5}
            />
            <Text> Cart</Text>
          </Box>
        </Box>
      </Box>
      <Box
        h={"56px"}
        bg="brown"
        margin={"auto"}
        fontSize={"16px"}
        color="white"
      >
        <Center>
          <Box
            display="flex"
            justifyContent={"space-between"}
            marginLeft={20}
            margin={"auto"}
            marginTop={3}
            w={"40%"}
            fontWeight="600"
            fontSize={"18px"}
            fontFamily="Marriweather"
          >
            <RouterLink to="/product">
              <Text>Fashion</Text>
            </RouterLink>
            <Text>Personal & Beauty Care</Text>
            <Text>Home Decor</Text>
            <Text>Product Near Me</Text>
          </Box>
        </Center>
      </Box>
    </div>
  );
};

export default Navbar;
