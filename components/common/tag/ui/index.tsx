import Link from "next/link";

import { Tag as ChakraTag } from "@chakra-ui/tag";

export type Props = {
  tag: string;
  url: string;
};

export function Tag({ tag, url }: Props) {
  return (
    <Link href={url} key={tag} passHref>
      <a>
        <ChakraTag
          _hover={{
            cursor: "pointer",
          }}
          size="md"
          borderRadius="none"
          mr={3}
          variant="solid"
          colorScheme="purple"
        >
          #{tag}
        </ChakraTag>
      </a>
    </Link>
  );
}
