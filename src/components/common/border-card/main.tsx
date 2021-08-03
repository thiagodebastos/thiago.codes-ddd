import { Box, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { Content, Props as ContentProps } from './ui';

export interface Props extends ContentProps {
  postUrl: string;
  imageUrl: string;
  featured?: true | null;
}

export function BorderCard({ postUrl, title, summary, imageUrl, tags, featured }: Props) {
  return (
    <Box width="100%" flexDirection="row" overflow="hidden" border="4px solid black">
      {featured && (
        <Link href={postUrl} passHref>
          <ChakraLink
            height={250}
            display="block"
            backgroundImage={imageUrl}
            backgroundSize="cover"
            backgroundPosition="50% 50%"
          />
        </Link>
      )}
      <Content summary={summary} title={title} tags={tags} postUrl={postUrl} />
    </Box>
  );
}
