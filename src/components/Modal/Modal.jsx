import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Modal = ({title, content, onClose}) => {
  return (
    <Flex pos='fixed' top='0' left='0' w='100%' h='100%' bgColor='rgba(0, 0, 0, 0.8) '
    justify='center' align='center' zIndex='1'>
      <Flex bgColor='white' p='20px' borderRadius='8px' boxShadow='xl'
      w='30vw' direction='column' justify='start' align='center'>

        <Button p='7px' bgColor="#007bff" color='white' border='none' 
        borderRadius='5px' cursor='pointer' w='4vw' alignSelf='end'
        onClick={onClose}>Close</Button>

        <Text fontSize='2vw' mb='0.5vw' >{title}</Text>

        <Box overflow='hidden'>{content}</Box>
        
      </Flex>
    </Flex>
  );
};

export default Modal;