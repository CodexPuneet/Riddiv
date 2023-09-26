
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Image,
    useColorModeValue,
    useColorMode
  } from '@chakra-ui/react';
  import { Link, useNavigate } from "react-router-dom";
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  
  
  export default function Navbar() {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <>
         <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box onClick={() => { navigate("/") }}>
              <Image ml={'20px'} w={"270px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOSOS2g7UG5uAwD8KiyVa-kdCzGOIxFnBe-s4M_MDLIxn5fLGjt9lTUFKubBthDrI-Q&usqp=CAU" />
            </Box>
          </HStack>
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* Add any additional navigation links here */}
            </HStack>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </HStack>
          <Flex alignItems={'center'}>
            <IconButton
              size="md"
              aria-label="Toggle dark mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Box>
      </>
    );
  }