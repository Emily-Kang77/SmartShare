// import Image from "next/image";

import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <div>
        Welcome to SmartShare.

        Sign up / login 
      </div>
    </ChakraProvider>
  );
}
