import Link from 'next/link'
import style from './Post.module.scss'
import { Box, Flex, Image, Text } from '@chakra-ui/react'


function Post({ post }) {
  const tech = post.frontmatter.tech

  return (
    
      <Link href={`/blog/${post.slug}`}>
        <Box width="350px">
          <Image src={post.frontmatter.cover_image} alt='image' 
            width={350} height={175} objectFit='cover'/>
          <Flex flexDirection="column" height="100%" justifyContent="space-between">
            <Text fontSize="24px" fontWeight="600">{post.frontmatter.title}</Text>
            <Text as="p" fontSize="16px" fontWeight="400">{post.frontmatter.excerpt}</Text>
            <Flex alignItems="center" gap="10px" margin-top="1em">
              <Text>{post.frontmatter.date}</Text>
              <Text>{post.frontmatter.read_time}</Text>
              {post.frontmatter.tech ?
                <Text sx={typeColor(tech)}>{post.frontmatter.tech}</Text>
              : null}
            </Flex>
          </Flex>
        </Box>
      </Link>
  )
}

function typeColor(arg) {
  switch(arg) {
    case "Javascript":
      return {
        backgroundColor: "#fff700",
        paddingX: "1em",
        fontWeight: "600",
        borderRadius: "15px",
      };
      
    case "React":
      return {
        backgroundColor: "#7addf8",
        fontWeight: "600",
        paddingX: "0.5em",
        borderRadius: "15px",
      };
  }
}


export default Post