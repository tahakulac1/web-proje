import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [] as Array<{ id: number; name: string; price: number; discountPrice?: number }>,
    }),
    getters: {
        cartItemCount: (state) => state.cart.length,
        totalPrice: (state) =>
            state.cart.reduce((sum, item) => sum + (item.discountPrice || item.price), 0),
    },
    actions: {
        addToCart(product: { id: number; name: string; price: number; discountPrice?: number }) {
            if (!this.cart.find((item) => item.id === product.id)) {
                this.cart.push(product);
            }
        },
        removeFromCart(productId: number) {
            this.cart = this.cart.filter((item) => item.id !== productId);
        },
    },
});
