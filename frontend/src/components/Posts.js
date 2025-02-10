import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];

const ErrorText = ({ children, ...props }) => (
  <Text fontSize="lg" color="red.300" {...props}>
    {children}
  </Text>
);

const Posts = () => {
  const [error, setError] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!validFileTypes.find((type) => type === file.type)) {
      setError("File must be in JPG/PNG format");
      return;
    }
  };
  return (
    <Box mt={6}>
      <Input id="imageInput" type="file" hidden onChange={handleUpload} />
      <Button
        as="label"
        htmlFor="imageInput"
        colorScheme="blue"
        variant="outline"
        mb={4}
        cursor="pointer"
      >
        Upload
      </Button>
      {error && <ErrorText>{error}</ErrorText>}

      <Text textAlign="left" mb={4}>
        Posts
      </Text>
    </Box>
  );
};
export default Posts;
