// import Image from "next/image";
import Link from 'next/link'

import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <div>

        <p>Welcome to SmartShare. </p>
        

        <ul>
          <li className="to-blue-500"><Link href="/signin">Sign in</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </div>
    </ChakraProvider>
  );
}
