import api from '@/services';
import { GetStaticProps } from 'next';

import Navbar from '@/components/Navbar';

import IMenuItem from '@/dtos/menuItem';
import IPageWP from '@/dtos/pageWP';

interface IHomeProps {
    menuItems: IMenuItem[];
    frontPage: IPageWP;
}

export default function Home({ menuItems, frontPage }: IHomeProps) {
    return (
        <>
            <Navbar items={menuItems} logoUrl="" />
            <header>
                <section>
                    <h1>Seja a sua melhor versão</h1>
                    <p>Faça um upgrade da sua versão Humana.</p>
                </section>
                <section>
                    <article>
                        <p>Categoria</p>
                        <h2>Título</h2>
                        <p>Resumo</p>
                    </article>
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
                </section>
            </header>
        </>
    );
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [],
    };
}

export const getStaticProps: GetStaticProps<IHomeProps> = async (ctx) => {
    const [menuList, page] = await Promise.all([
        api.get(`${process.env.WORDPRESS_API_URL}/wp-api-menus/v2/menus/2`),
        api.get(`${process.env.WORDPRESS_API_URL}/wp/v2/frontpage`),
    ]);

    if (!menuList) {
        throw new Error('Failed to fetch menu list.');
    }
    if (!page) {
        throw new Error('Failed to fetch frontpage data.');
    }

    const menuItems = menuList.data.items;
    const frontPage = page.data;

    return {
        props: { menuItems, frontPage },
    };
};
