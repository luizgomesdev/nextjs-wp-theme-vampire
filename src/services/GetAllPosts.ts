import api from '@/services/Api';

export default async function getAllPosts() {
    try {
        const response = await api.get(`${process.env.WORDPRESS_API_URL_TANGERINO}/wp/v2/posts?per_page=13&_embed`);
        
        return response.data;
    } catch {
        throw new Error('Failed to fetch  posts.');
    }
}
