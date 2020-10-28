import api from '@/services/Api';

export default async function getMenuItems() {
    try {
        const response = await api.get(`${process.env.WORDPRESS_API_URL}/wp-api-menus/v2/menus/2`);

        const menuItems = response.data.items;

        return menuItems;
    } catch {
        throw new Error('Failed to fetch menu list.');
    }
}
