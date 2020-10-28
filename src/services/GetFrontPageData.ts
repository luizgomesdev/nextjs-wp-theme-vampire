import api from '@/services/Api';

export default async function getFrontPageDate() {
    try {
        const response = await api.get(`${process.env.WORDPRESS_API_URL}/wp/v2/frontpage`);

        return response.data;
    } catch {
        throw new Error('Failed to fetch frontpage data.');
    }
}
