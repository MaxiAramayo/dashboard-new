import {
  Avatar,
  Box,
  Text,
  Heading,
  Stack,
  Grid,
  ButtonGroup,
  IconButton,
  Button,
} from "@chakra-ui/react";
import React from "react";
import InstagramIcon from "../images/contact/InstagramIcon";
import FacebookIcon from "../images/icons/facebookIcon";

import WhatsAppIcon from "../images/icons/WhatsappIcon";

const Navbar = ({
  nombreNegocio,
  NavBarImage,
  iconImage,
  descripcion,
  direccion,
  horario,
  aclaracion,
}) => {
  return (
    <>
      <Box
        bg="#FEF7E3"
        height={{ base: "360px" }}
        borderBottomLeftRadius={"20px"}
        borderBottomRightRadius={"20px"}
      >
        <Box
          height="60%"
          backgroundImage={`url(${NavBarImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "216px",
            backgroundColor: "rgba(0,0,0)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
            zIndex: 1,
          }}
        >
          <Grid
            gridTemplateColumns={{
              base: "1.3fr 2fr",
            }}
            h={{ base: "100%" }}
          >
            <Box>
              <Box
                bg="white"
                h={{ lg: "180px", base: "120px" }}
                w={{ lg: "180px", base: "120px" }}
                rounded="full"
                position="absolute"
                top={{ lg: "9rem", base: "8rem" }}
                left={{ lg: "10rem", base: "1rem" }}
                justifyContent={{ lg: "center" }}
                alignItems={{ lg: "center" }}
                zIndex={2}
              >
                <Box
                  w={{ lg: "150px", base: "100px" }}
                  h={{ lg: "150px", base: "100px" }}
                  rounded="full"
                  mx="auto"
                  position="relative"
                  mt={{ lg: "20px" }}
                  top={{ lg: "15px", base: "9px" }}
                  backgroundImage={iconImage}
                  backgroundSize="cover"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                ></Box>
              </Box>
            </Box>

            <Stack
              color="white"
              zIndex={1}
              position="relative"
              justifyContent="center"
              mt={{ lg: "5rem", base: "4rem", md: "6rem" }}
              fontFamily="Dosis"
            >
              <Text fontSize="2xl" fontWeight="bold">
                {nombreNegocio}
              </Text>
              <Text fontSize="lg" fontWeight="semibold">
                {descripcion}
              </Text>
              <Text fontSize="lg" fontWeight="light">
                {direccion}
              </Text>
            </Stack>
          </Grid>
        </Box>

        <Box height="40%">
          <Stack
            mt={{ base: "3rem", md: "2rem", lg: "3rem" }}
            px={{ base: "1rem", md: "2rem", lg: "3rem" }}
            flexDir="row"
            justifyContent="space-between"
          >
            <Stack>
              <Text>Horario 1</Text>
              <Text>Horario 2</Text>
            </Stack>

            <Stack
              flexDir="row"
              style={{
                marginTop: "0",
              }}
              justifyContent="space-evenly"
            >
              <WhatsAppIcon color="#F8D676" width={50} height={50}/>
              <InstagramIcon color="#F8D676" width={60} height={50}/>
              <FacebookIcon color="#F8D676" width={20} height={20}/>
            </Stack>
          </Stack>

          <Text
            textAlign="center"
            pt={3}
            fontSize="lg"
            fontWeight="semibold"
            color="#F8D676"
          >
            {aclaracion}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

//  <>
//       <Grid
//         height={{ lg: "260px", base: "10rem" }}
//         backgroundImage={NavBarImage}
//         backgroudColor="white"
//         backgroundSize="cover"
//         backgroundPosition="center"
//         backgroundRepeat="no-repeat"
//         shadow="xl"
//         gridTemplateColumns={{ base: "1.5fr  2fr" }}
//         _before={{
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "80%",
//           height: { lg: "260px", base: "10rem" },

//           bg: "rgba(0,0,0,0.5)",
//         }}
//       >
//         <Box>
//           <Box
//             bg="white"
//             h={{ lg: "180px", base: "120px" }}
//             w={{ lg: "180px", base: "120px" }}
//             rounded="full"
//             position="relative"
//             top={{ lg: "9rem", base: "5rem" }}
//             left={{ lg: "10rem", base: "1rem" }}
//             justifyContent={{ lg: "center" }}
//             alignItems={{ lg: "center" }}
//           >
//             <Box
//               w={{ lg: "150px", base: "100px" }}
//               h={{ lg: "150px", base: "100px" }}
//               rounded="full"
//               mx="auto"
//               position="relative"
//               mt={{ lg: "20px" }}
//               top={{ lg: "15px", base: "9px" }}
//               backgroundImage={iconImage}
//               backgroundSize="cover"
//               backgroundPosition="center"
//               backgroundRepeat="no-repeat"
//             ></Box>
//           </Box>
//         </Box>

//         <Stack
//           color="white"
//           position={{ base: "relative" }}
//           h="full"
//           justifyContent={{ base: "center" }}
//           alignItems={{ lg: "end" }}
//           gridColumn={{lg: "repeat(2, 1fr)"}}
//           top={{ base: "1.3rem" }}
//           display={{ base: "flex" }}
//           fontFamily="Dosis"
//           gap={5}
//           px={{ base: "1rem", lg: "2rem" }}
//         >
//           <Heading
//             size={{ lg: "xl", base: "lg" }}
//             fontWeight={"extrabold"}

//           >
//             {nombreNegocio}
//           </Heading>
//           <Stack>
//             <Text

//               fontWeight="semibold"
//               fontSize={{ lg: "md", base: "md" }}
//             >
//               {descripcion}
//             </Text>
//             <Text

//               fontWeight="light"
//               fontSize={{ lg: "xl", base: "sm" }}
//             >
//               {direccion}
//             </Text>
//           </Stack>
//         </Stack>
//       </Grid>

//       <Box
//         height={{ base: "8rem", lg: "13rem" }}
//         position="relative"
//         zIndex={-1}
//       >
//         <Grid
//           justify={"center"}
//           position="relative"
//           top={{ base: "3rem", lg: "7rem" }}
//           width="95%"
//           mx="auto"
//           templateColumns={"2fr 1fr"}
//         >
//           <Text
//             fontSize={{ lg: "2xl", base: "md" }}
//             fontFamily="Dosis"
//             fontWeight="semibold"
//             color="#6F46E8"
//           >
//             Horarios: {horario}
//           </Text>
//           <Box display="flex" justifyContent="space-evenly">
//             <Image src={whatsAppIcon} width={30} height={30} />
//             <Image src={facebookIcon} width={30} height={30} />
//             <Image src={igIcon} width={30} height={30} />
//           </Box>
//         </Grid>
//       </Box>

//       {aclaracion ? (
//         <>
//           <Box
//             bg="#EAE3FE"
//             height={{ base: "37px", lg: "57px" }}
//             alignItems="center"
//             display="flex"
//             justifyContent="center"
//           >
//             <Text
//               fontSize={{ lg: "2xl", base: "md" }}
//               color={"#6F46E8"}
//               fontFamily="Dosis"
//               fontWeight="semibold"
//               textAlign="center"
//             >
//               {aclaracion}
//             </Text>
//           </Box>
//         </>
//       ) : (
//         <></>
//       )}
//     </>
