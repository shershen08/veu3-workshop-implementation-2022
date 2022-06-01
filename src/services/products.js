import instance from './index'

export const loadProducts = () => instance.get('products')
            