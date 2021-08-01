import React from "react";
import { Meta } from "@storybook/react";
import { Card } from "./main";
import { Flex } from "@chakra-ui/react";

export default {
  component: Card,
  title: "Components/Card",
  decorators: [
    (Story) => (
      <Flex p={0} width="600px">
        <Story />
      </Flex>
    ),
  ],
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <Card
    title="What are HttpOnly Cookies?"
    tags={["security", "webdev", "someveryveryveryveeeerrrryyyyyyyylongtag"]}
    summary="If the client-side code attempts to read the cookie, the browser will return an empty string as a result."
    postUrl="#"
    imageUrl="https://images.techhive.com/images/article/2016/08/security_hack_infrastructure_thinkstock-100677906-large.jpg"
  />
);

export const Featured: React.VFC<{}> = () => (
  <Card
    title="What are HttpOnly Cookies?"
    tags={["security", "webdev", "someveryveryveryveeeerrrryyyyyyyylongtag"]}
    summary="If the client-side code attempts to read the cookie, the browser will return an empty string as a result."
    postUrl="#"
    imageUrl="https://images.techhive.com/images/article/2016/08/security_hack_infrastructure_thinkstock-100677906-large.jpg"
    featured
  />
);
