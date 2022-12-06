import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        interval={1000}
        autoPlay
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <Box w={'full'} h={'100vh'}>
          {/* <Image src={img1}/> */}
          <Image src={img1}  h={"full"} w={"full"} objectFit={"cover"}/>
          <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
            Watch the future
          </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
          {/* <Image src={img1}/> */}
          <Image src={img2} h={"full"} w={"full"} objectFit={"cover"} />
          <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Future is Gaming
          </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
          {/* <Image src={img1}/> */}
          <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
          <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Gaming world
          </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
          {/* <Image src={img1}/> */}
          <Image src={img4} h={"full"} w={"full"} objectFit={"cover"} />
          <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
            Night Mode
          </Heading>
        </Box>
      </Carousel>

      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} />
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium porro magnam consequuntur quos ratione velit iste illum
            debitis, quaerat, a sapiente doloremque quidem, nisi quo fugiat
            esse. Officiis dignissimos cum repellendus pariatur earum, quaerat
            tempore ipsa consequatur accusantium quae officia eaque tempora
            nostrum reiciendis voluptatibus. Natus enim saepe amet vero
            veritatis inventore fugit repellendus vel a accusantium, quos labore
            voluptas temporibus soluta est laudantium iure necessitatibus atque
            provident suscipit non, officiis incidunt nam praesentium? Accusamus
            ratione tenetur et iste fugit quos id autem, exercitationem rem.
            Totam, rem cupiditate, eos deserunt hic quam facilis excepturi quis
            distinctio aspernatur dolorem quaerat dolores quo rerum cum
            inventore aliquid animi. Consectetur nisi quod quos qui commodi nam.
            Nemo ad perspiciatis amet facilis, repudiandae tenetur, dolore
            laboriosam maiores placeat reprehenderit assumenda, minus culpa
            officia ea obcaecati eum suscipit porro officiis. Laudantium nulla
            eveniet nesciunt quibusdam sunt architecto voluptas provident in
            laboriosam aut atque dolorem quasi, commodi nihil suscipit
            temporibus ea veniam a! Itaque, quasi praesentium quae modi animi
            optio nesciunt voluptate tempora.
          </Text>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
