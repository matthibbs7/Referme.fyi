import React, { Ref } from "react";
import { Flex, Stack, Button, Image } from "@chakra-ui/react";

type ImageUploadProps = {
  selectedFile?: string;
  setSelectedFile: (value: string) => void;
  selectFileRef: React.RefObject<HTMLInputElement>;
  onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  selectedFile,
  setSelectedFile,
  selectFileRef,
  onSelectImage,
}) => {
  return (
    <Flex borderRadius="10px" border="2px dashed lightgray" direction="column" justify="center" align="center" width="100%">
      {selectedFile ? (
        <>
          <Image
            mt={3}
            src={selectedFile as string}
            maxWidth="130px"
            maxHeight="130px"
          />
          <Stack direction="row" mt={2}>
            <Button
              variant="outline"
              height="28px"
              onClick={() => setSelectedFile("")}
              mb={3}
            >
              Remove
            </Button>
          </Stack>
        </>
      ) : (
        <Flex
          justify="center"
          align="center"
          p={20}
          border="1px dashed"
          borderColor="gray.200"
          borderRadius={4}
          width="100%"
        >
          <Button
            variant="outline"
            height="28px"
            onClick={() => selectFileRef.current?.click()}
          >
            Upload
          </Button>
          <input
            id="file-upload"
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
            hidden
            ref={selectFileRef}
            onChange={onSelectImage}
          />
        </Flex>
      )}
    </Flex>
  );
};
export default ImageUpload;