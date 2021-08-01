import React from 'react';
import { Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { Tag } from '../../common/tag/ui';

export type Props = {
  title: string;
  summary: string;
  postUrl: string;
  tags?: string[];
};

export function Content({ title, summary, tags, postUrl }: Props) {
  return (
    <Flex flexDirection="column" p={4}>
      <Link href={postUrl} passHref>
        <ChakraLink _hover={{ textDecoration: 'none', color: 'purple.500' }}>
          <Heading mb={3}>{title}</Heading>
        </ChakraLink>
      </Link>
      {tags && (
        <Flex pb={3}>
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} url={`/tags/${tag}`} />
          ))}
        </Flex>
      )}
      <Text>{summary}</Text>
    </Flex>
  );
}
