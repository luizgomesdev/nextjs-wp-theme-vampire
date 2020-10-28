interface IPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: [];
    categories: Array<number>;
    tags: [];
    yoast_head: string;
    _links: {
        self: [
            {
                href: string;
            }
        ];
        collection: [
            {
                href: string;
            }
        ];
        about: [
            {
                href: string;
            }
        ];
        author: [
            {
                embeddable: boolean;
                href: string;
            }
        ];
        replies: [
            {
                embeddable: boolean;
                href: string;
            }
        ];
        'version-history': [
            {
                count: number;
                href: string;
            }
        ];
        'predecessor-version': [
            {
                id: number;
                href: string;
            }
        ];
        'wp:featuredmedia': [
            {
                embeddable: boolean;
                href: string;
            }
        ];
        'wp:attachment': [
            {
                href: string;
            }
        ];
        'wp:term': [
            {
                taxonomy: string;
                embeddable: boolean;
                href: string;
            },
            {
                taxonomy: string;
                embeddable: boolean;
                href: string;
            }
        ];
        curies: [
            {
                name: string;
                href: string;
                templated: boolean;
            }
        ];
    };
    _embedded: {
        author: [
            {
                id: 2;
                name: string;
                url: string;
                description: string;
                link: string;
                slug: string;
                avatar_urls: {
                    [key: string]: string;
                };

                _links: {
                    self: [
                        {
                            href: string;
                        }
                    ];
                    collection: [
                        {
                            href: string;
                        }
                    ];
                };
            }
        ];

        'wp:featuredmedia': [
            {
                id: number;

                slug: string;

                title: {
                    rendered: string;
                };
                caption: {
                    rendered: string;
                };
                alt_text: string;

                media_details: {
                    width: number;
                    height: number;
                    file: string;
                    sizes: {
                        medium: {
                            file: string;
                            width: number;
                            height: number;
                            mime_type: string;
                            source_url: string;
                        };
                        large: {
                            file: string;
                            width: number;
                            height: number;
                            mime_type: string;
                            source_url: string;
                        };
                        thumbnail: {
                            file: string;
                            width: number;
                            height: number;
                            mime_type: string;
                            source_url: string;
                        };
                        medium_large: {
                            file: string;
                            width: number;
                            height: number;
                            mime_type: string;
                            source_url: string;
                        };

                        full: {
                            file: string;
                            width: number;
                            height: number;
                            mime_type: string;
                            source_url: string;
                        };
                    };
                };
                source_url: string;
            }
        ];

        'wp:term': [
            [
                {
                    id: number;
                    link: string;
                    name: string;
                    slug: string;
                    taxonomy: string;
                }
            ]
        ];
    };
}

export default IPost;
