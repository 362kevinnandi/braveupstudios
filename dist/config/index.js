"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: 'By Style',
        value: 'by_style',
        featured: [
            {
                name: 'Editor picks',
                href: "/products?category=ui_kits",
                imageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
                name: 'New Arrivals',
                href: '/products?category=ui_kits&sort=desc',
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name: 'Bestsellers',
                href: '/products?category=ui_kits',
                imageSrc: '/nav/ui-kits/purple.jpg',
            },
        ],
    },
    {
        label: 'By size',
        value: 'by_size',
        featured: [
            {
                name: 'Favorite Icon Picks',
                href: "/products?category=icons",
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'New Arrivals',
                href: '/products?category=icons&sort=desc',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Bestselling Icons',
                href: '/products?category=icons',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
        ],
    },
];
