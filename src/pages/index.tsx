import { useState } from 'react';
import { GetStaticProps } from 'next';

import IMenuItem from '@/dtos/menuItem';
import IPageWP from '@/dtos/pageWP';
import IPost from '@/dtos/posts';

import getFrontPageData from '@/services/GetFrontPageData';
import getMenuItems from '@/services/GetMenuItems';
import getAllPosts from '@/services/GetAllPosts';

import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import PostSpotlight from '@/components/PostSpotlight';
import SideBarPopularPosts from '@/components/SidebarPopularPosts';
import PostCards from '@/components/PostsCards';

import { Header, Headline, SpotlightSection, Main, PostsTitleSection, PostsSection } from '@/styles/pages/index';

interface IHomeProps {
    menuItems: IMenuItem[];
    frontPage: IPageWP;
    posts: IPost[];
}

export default function Home({ menuItems, frontPage, posts }: IHomeProps) {
    const [lastPost, setLastPost] = useState(posts.slice(0, 1));
    const [latestPosts, setLatestPosts] = useState(posts.slice(1));
  
    return (
        <>
            <Navbar items={menuItems} logoUrl="" />

            <Header>
                <Container>
                    <Headline dangerouslySetInnerHTML={frontPage && { __html: frontPage.content.rendered }}></Headline>
                    <SpotlightSection>
                        <PostSpotlight
                            id={lastPost[0].id}
                            title={lastPost[0].title.rendered}
                            coverImage={lastPost[0]._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large}
                            category={lastPost[0]._embedded['wp:term'][0][0].name}
                            date={lastPost[0].date}
                            author={lastPost[0]._embedded.author[0].name}
                            slug={lastPost[0].slug}
                            excerpt={lastPost[0].excerpt.rendered}
                        />

                        <SideBarPopularPosts popularPosts={latestPosts.slice(0, 4)} />
                    </SpotlightSection>
                </Container>
            </Header>

            <Main>
                <Container>
                    <PostsTitleSection>
                        <h2>Últimos posts</h2>
                    </PostsTitleSection>

                    <PostsSection>
                        {latestPosts &&
                            latestPosts.map((post) => (
                                <PostCards
                                    id={post.id}
                                    title={post.title.rendered}
                                    coverImage={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large}
                                    category={post._embedded['wp:term'][0][0].name}
                                    date={post.date}
                                    author={post._embedded.author[0].name}
                                    slug={post.slug}
                                    excerpt={post.excerpt.rendered}
                                />
                            ))}
                    </PostsSection>
                </Container>
            </Main>
        </>
    );
}

export const getStaticProps: GetStaticProps<IHomeProps> = async (ctx) => {
    const frontPage = await getFrontPageData();
    const menuItems = await getMenuItems();
    const posts = await getAllPosts();

    return {
        props: { menuItems, frontPage, posts },
    };
};
