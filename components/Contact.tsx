import {
  Box,
  Text,
  Button,
  Textarea,
  Container,
  useBreakpointValue,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";

const _secondBoxWidth = { base: "100%", lg: "40rem" };

const validateEmpty = (value: string) => {
  if (!value.toString().length) return "Este campo es obligatorio";
  return undefined;
};

const validateEmail = (value: string) => {
  if (!value.toString().length) return "Este campo es obligatorio";
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
    return "El correo electrónico no es válido";
  return undefined;
};

type ContactValues = {
  name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
};

export const Contact = () => {
  const lg = useBreakpointValue({ base: false, lg: true });

  const toast = useToast();

  const handleSubmit = (values: ContactValues) => {
    const { name, last_name, email, subject, message } = values;
    const mailtoLink = `mailto:manuelapanasco@gmail.com?subject=${subject}&body=Name: ${name}\r\n\Last name: ${last_name}\r\n\nEmail: ${email}\r\n\Message: ${message}`;

    window.location.href = encodeURI(mailtoLink);

    toast({
      title: "Abriendo aplicacion de correo...",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Container px="0" minW="100%" pt="1rem">
        <Box
          bg="white"
          color="blackAlpha.700"
          p={6}
          pt={4}
          borderRadius={16}
          boxShadow="2xl"
          w={_secondBoxWidth}
        >
          <Formik
            initialValues={{
              name: "",
              last_name: "",
              email: "",
              subject: "",
              message: "",
            }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ handleSubmit, errors }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={5} align="flex-start">
                  <Text fontSize="1.5rem" fontWeight="bold">
                    Contact me
                  </Text>
                  <Flex
                    w="100%"
                    gap="1rem"
                    flexDir={{ base: "column", lg: "row" }}
                  >
                    <Box w={{ base: "100%", lg: "50%" }}>
                      <FormControl isInvalid={!!errors.name} variant="floating">
                        <Field
                          as={Input}
                          id="name"
                          placeholder=" "
                          name="name"
                          type="text"
                          validate={(value: any) => {
                            return validateEmpty(value);
                          }}
                        />
                        <FormLabel>Name</FormLabel>
                        <FormErrorMessage>{errors.name}</FormErrorMessage>
                      </FormControl>
                    </Box>
                    <Box w={{ base: "100%", lg: "50%" }}>
                      <FormControl
                        isInvalid={!!errors.last_name}
                        variant="floating"
                      >
                        <Field
                          as={Input}
                          id="last_name"
                          name="last_name"
                          type="number"
                          placeholder=" "
                          validate={(value: any) => {
                            return validateEmpty(value);
                          }}
                        />
                        <FormLabel>Last name</FormLabel>
                        <FormErrorMessage>{errors.last_name}</FormErrorMessage>
                      </FormControl>
                    </Box>
                  </Flex>

                  <Box w="100%">
                    <FormControl isInvalid={!!errors.email} variant="floating">
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="text"
                        placeholder=" "
                        validate={(value: any) => {
                          return validateEmail(value);
                        }}
                      />
                      <FormLabel>Email</FormLabel>
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                  </Box>
                  <Box w="100%">
                    <FormControl
                      isInvalid={!!errors.subject}
                      variant="floating"
                    >
                      <Field
                        as={Input}
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder=" "
                        validate={(value: any) => {
                          return validateEmpty(value);
                        }}
                      />
                      <FormLabel>Subject</FormLabel>
                      <FormErrorMessage>{errors.subject}</FormErrorMessage>
                    </FormControl>
                  </Box>
                  <Box w="100%">
                    <FormControl
                      isInvalid={!!errors.message}
                      variant="floating"
                    >
                      <Field
                        as={Textarea}
                        id="message"
                        name="message"
                        type="text"
                        placeholder=" "
                        resize="none"
                        validate={(value: any) => {
                          return validateEmpty(value);
                        }}
                      />
                      <FormLabel>Message</FormLabel>
                      <FormErrorMessage>{errors.message}</FormErrorMessage>
                    </FormControl>
                  </Box>
                  <Button
                    type="submit"
                    bg="black"
                    color="white"
                    width="100%"
                    mt={2}
                    _hover={{ backgroundColor: "black" }}
                  >
                    SEND
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
};
