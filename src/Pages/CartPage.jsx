import React from "react";
import { Box, Text, Img, HStack, SimpleGrid, Button } from "@chakra-ui/react";

const CartPage = (data) => {
  // const { data } = props;
  console.log(data);
  return (
    <Box>
      <Box mt={"20px"}>
        <Box
          bg="green"
          h="490px"
          w="1170px"
          margin={"auto"}
          pb={"21px"}
          pl={"15px"}
        >
          <Box h={"73px"} bg="black" mt={"20px"} p="10px" color={"white"}>
            <Box display="flex" gap={"155px"}>
              <Box mr={"280px"}>
                <Text lineHeight={"7rm"}>Home/My Cart</Text>

                <Text>My Cart Items</Text>
              </Box>
              <Box mr={"80px"}>
                <Text>Subtotal:</Text>
              </Box>
              <Button w="300px" h="40px" bg="#902735">
                Place Order
              </Button>
            </Box>
          </Box>
          <hr />
        </Box>
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

export default CartPage;
