import Link from 'next/link';
import { format } from 'date-fns';

import { Container, WrapperContent, Category } from './style';

interface PostSpotlightProps {
    id: number;
    title: string;
    coverImage: { file: string; width: number; height: number; mime_type: string; source_url: string };
    category: string;
    date: string;
    author: string;
    slug: string;
    excerpt: string;
}

export default function PostSpotlight({ id, title, category, coverImage, date, author, slug, excerpt }: PostSpotlightProps) {
    return (
        <Link href={`/posts/${slug}`}>
            <a>
                <Container key={id} coverImageUrl={coverImage.source_url}>
                    <WrapperContent>
                        <Category>{category}</Category>
                        <h2>{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                        <small>
                            {author} • {format(new Date(date), 'dd/MM/yyyy')}
                        </small>
                    </WrapperContent>
                </Container>
            </a>
        </Link>
    );
}
