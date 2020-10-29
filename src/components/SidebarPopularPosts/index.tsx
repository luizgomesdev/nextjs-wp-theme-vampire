import Link from 'next/link';
import { format } from 'date-fns';

import IPost from '@/dtos/posts';

import { Container,H3, MediaPost, Image, PostContent, PostTitle } from './style';

interface SideBarPopularPostsProps {
    popularPosts: Array<IPost>;
}

export default function SideBarPopularPosts({ popularPosts }: SideBarPopularPostsProps) {
    return (
        <Container>
            <H3>Populares</H3>
            {popularPosts &&
                popularPosts.map((post) => (
                    <Link href={`/posts/${post.slug}`}>
                        <a>
                            <MediaPost key={post.id}>
                                <Image
                                    src={post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}
                                    alt={post._embedded['wp:featuredmedia'][0].alt_text}
                                    title={post.title.rendered}
                                />
                                <PostContent>
                                    <PostTitle>{post.title.rendered}</PostTitle>
                                    <small>{format(new Date(post.date), 'dd/MM/yyyy')}</small>
                                </PostContent>
                            </MediaPost>
                        </a>
                    </Link>
                ))}
        </Container>
    );
}
