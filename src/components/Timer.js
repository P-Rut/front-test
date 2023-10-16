import { HStack, Text, VStack } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [enterDate, setEnterDate] = useState(new Date().toString())

  useEffect(() => {
    setEnterDate(new Date().toTimeString())
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <VStack gap="10px" align="left">
      <HStack>
        <Text fontWeight="bold">Seconds spend on page:</Text>
        <p>{`${seconds} s`}</p>
      </HStack>
      <HStack>
        <Text fontWeight="bold">Time of entering the website:</Text>
        <p>{enterDate}</p>
      </HStack>
    </VStack>
  )
}

export default Timer
