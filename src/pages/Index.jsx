import { Container, VStack, Text, Box, Image, IconButton, HStack, Badge } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} align="stretch" width="100%">
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNzU0MjQ5OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
          <Text fontSize="2xl" fontWeight="bold" mt={4}>
            John Doe
          </Text>
          <Text fontSize="md" color="gray.500">
            Software Engineer
          </Text>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Contact Information
          </Text>
          <VStack align="start" spacing={2}>
            <HStack>
              <FaPhone />
              <Text>(123) 456-7890</Text>
            </HStack>
            <HStack>
              <FaEnvelope />
              <Text>john.doe@example.com</Text>
            </HStack>
            <HStack>
              <FaMapMarkerAlt />
              <Text>San Francisco, CA</Text>
            </HStack>
          </VStack>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Social Profiles
          </Text>
          <HStack spacing={4}>
            <IconButton as="a" href="https://linkedin.com/in/johndoe" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton as="a" href="https://github.com/johndoe" aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </HStack>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Skills
          </Text>
          <HStack spacing={2} wrap="wrap">
            <Badge colorScheme="green">JavaScript</Badge>
            <Badge colorScheme="blue">React</Badge>
            <Badge colorScheme="purple">Node.js</Badge>
            <Badge colorScheme="red">GraphQL</Badge>
            <Badge colorScheme="yellow">TypeScript</Badge>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
