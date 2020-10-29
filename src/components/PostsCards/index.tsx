import Link from 'next/link';

import IPost from '@/dtos/posts';

import { Container, Image, PostContent } from './style';

interface PostCardsProps {
    id: number;
    title: string;
    coverImage: { file: string; width: number; height: number; mime_type: string; source_url: string };
    category: string;
    date: string;
    author: string;
    slug: string;
    excerpt: string;
}

export default function PostCards({ id, title, category, coverImage, date, author, slug, excerpt }: PostCardsProps) {
    return (
        <Container key={id}>
            <Link href={`/posts/${slug}`}>
                <a>
                    <Image src={coverImage.source_url} alt={title} title={title} />

                    <PostContent>
                        <h2>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                    </PostContent>
                </a>
            </Link>
        </Container>
    );
}
