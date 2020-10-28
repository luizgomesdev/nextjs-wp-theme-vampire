import Link from 'next/link';
import { format } from 'date-fns';

import { Container, WrapperContent, Category } from './style';

interface SpotlightPostProps {
    title: string;
    coverImage: { file: string; width: number; height: number; mime_type: string; source_url: string };
    category: string;
    date: string;
    author: string;
    slug: string;
    excerpt: string;
}

export default function SpotlightPost({ title, category, coverImage, date, author, slug, excerpt }: SpotlightPostProps) {
    return (
        <Container coverImageUrl={coverImage.source_url}>
            <WrapperContent>
                <Category>{category}</Category>
                <Link href={`/posts/${slug}`}>
                    <a>
                        <h2>{title}</h2>
                    </a>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                <small>
                    {author} • {format(new Date(date), 'dd/MM/yyyy')}
                </small>
            </WrapperContent>
        </Container>
    );
}
