import { GetStaticProps } from 'next';

import IMenuItem from '@/dtos/menuItem';
import IPageWP from '@/dtos/pageWP';
import IPost from '@/dtos/posts';

import getFrontPageData from '@/services/GetFrontPageData';
import getMenuItems from '@/services/GetMenuItems';
import getAllPosts from '@/services/GetAllPosts';

import Navbar from '@/components/Navbar';
import Container from '@/components/Container';
import SpotlightPost from '@/components/SpotlightPost';

import { Header, Headline, SpotlightSection } from '@/styles/pages/index';
import { useState } from 'react';

interface IHomeProps {
    menuItems: IMenuItem[];
    frontPage: IPageWP;
    posts: IPost[];
}

export default function Home({ menuItems, frontPage, posts }: IHomeProps) {
    return (
        <>
            <Navbar items={menuItems} logoUrl="" />

            <Header>
                <Container>
                    <Headline dangerouslySetInnerHTML={frontPage && { __html: frontPage.content.rendered }}></Headline>
                    <SpotlightSection>
                        <SpotlightPost
                            title={posts[0].title.rendered}
                            coverImage={posts[0]._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large}
                            category={posts[0]._embedded['wp:term'][0][0].name}
                            date={posts[0].date}
                            author={posts[0]._embedded.author[0].name}
                            slug={posts[0].slug}
                            excerpt={posts[0].excerpt.rendered}
                        />

                        <aside>
                            <div>
                                <button></button>
                                <button></button>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p>Data</p>
                                    <h3>Título</h3>
                                </div>
                            </div>
                        </aside>
                    </SpotlightSection>
                </Container>
            </Header>
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
