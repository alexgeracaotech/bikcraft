
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Link from './Link.jsx';
import List from './List.jsx';
import Item from './Item.jsx';
import Main from './Main.jsx';
import Section from './Section.jsx';
import Box from './Box.jsx';
import Heading from './Heading.jsx';
import Drawer from './Drawer.jsx';
import Paragraph from './Paragraph.jsx';
import Button from './Button.jsx';
import Image from './Image.jsx';

const App = () => {
  return (
    <>
      <Header
        backgroundColor='bg-black'
        color='text-white'
        paddingX='px-50'
      >
        <Navigation
          heigth='h-[6rem]'
          display='flex'
          justify='justify-between'
          align='items-center'
        >
          <Link
            link='#'
            text='bikcraft'
            fontSize='text-5xl'
            fontWeight='font-black'
            fontCase='uppercase'
            letterSpace='tracking-[.5rem]'
          />
          <List
            display='flex'
            gap='gap-[2.5rem]'
          >
            <Item>
              <Link
                link='#'
                text='models'
                fontSize='text-lg'
                fontWeight='font-semibold'
                fontCase='uppercase'
                letterSpace='tracking-[.15rem]'
                hover='hover:text-yellow-500'
                transition='duration-[.25s]'
              />
            </Item>
            <Item>
              <Link
                link='#'
                text='contact'
                fontSize='text-lg'
                fontWeight='font-semibold'
                fontCase='uppercase'
                letterSpace='tracking-[.15rem]'
                hover='hover:text-yellow-500'
                transition='duration-[.25s]'
              />
            </Item>
            <Item>
              <Link
                link='#'
                text='about'
                fontSize='text-lg'
                fontWeight='font-semibold'
                fontCase='uppercase'
                letterSpace='tracking-[.15rem]'
                hover='hover:text-yellow-500'
                transition='duration-[.25s]'
              />
            </Item>
          </List>
        </Navigation>
      </Header>
      <Main>
        <Section
          backgroundColor='bg-black'
          color='text-white'
          heigth='h-[37.5rem]'
          paddingX='px-50'
          display='flex'
          gap='gap-[2rem]'
        >
          <Box
            width='w-[50%]'
            display='flex'
            flexDirection='flex-col'
            justify='justify-center'
            gap='gap-[1.5rem]'
          >
            <Heading
              fontSize='text-[3.5rem]'
              fontWeight='font-semibold'
            >
              Custom-made handcrafted bicycles<Drawer color='text-yellow-500'>.</Drawer>
            </Heading>
            <Paragraph
              text='High-precision, quality electric bicycles, custom-made for you. Explore the world at your own pace with Bikcraft.'
              fontSize='text-xl'
              color='text-gray-300'
            />
            <Button
              text='choose yours'
              width='w-fit'
              backgroundColor='bg-yellow-500'
              color='text-black'
              paddingX='px-[2rem]'
              paddingY='py-[1rem]'
              fontSize='text-lg'
              fontWeight='font-bold'
              fontCase='uppercase'
              borderRadius='rounded-sm'
              hover='hover:bg-yellow-600'
              transition='duration-[.25s]'
              cursor='cursor-pointer'
            />
          </Box>
          <Box
            width='w-[50%]'
          >
            <Image
              source='./bike-hero.jpg'
              alternative='black bike'
            />
          </Box>
        </Section>
      </Main>
    </>
  );
}

export default App;
