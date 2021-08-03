import { Flex } from '@chakra-ui/layout';
import { Tag, Props as TagProps } from './ui/tag';

export type Props = {
  tags: TagProps[];
};

export function TagGroup({ tags }: Props) {
  return (
    <Flex pb={3}>
      {tags.map((tag) => (
        <Tag {...tag} key={tag.tag} />
      ))}
    </Flex>
  );
}
