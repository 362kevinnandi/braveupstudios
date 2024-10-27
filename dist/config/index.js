"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: 'By Style',
        value: 'by_style',
        featured: [
            {
                name: 'maisonette',
                href: "/products?category=ui_kits",
                imageSrc: '/nav/ui-kits/mixed.jpg',
            },
            {
                name: 'bungalow',
                href: '/products?category=ui_kits&sort=desc',
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name: 'Modern',
                href: '/products?category=ui_kits',
                imageSrc: '/nav/ui-kits/purple.jpg',
            },
        ],
    },
    {
        label: 'By Size',
        value: 'by_size',
        featured: [
            {
                name: '1&2 Bedrooms',
                href: "/products?category=icons",
                imageSrc: '/nav/icons/2beds.webp',
            },
            {
                name: '3&4 Bedrooms',
                href: '/products?category=icons&sort=desc',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: '+5 Bedrooms',
                href: '/products?category=icons',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
        ],
    },
    {
        label: 'By Feature',
        value: 'by_feature',
        featured: [
            {
                name: 'Fireplace',
                href: "/products?category=icons",
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Open kitchen',
                href: '/products?category=icons&sort=desc',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Basement',
                href: '/products?category=icons',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
        ],
    },
    {
        label: 'By Budget',
        value: 'by_budget',
        featured: [
            {
                name: 'Under $40 plans',
                href: "/products?category=icons",
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: '$40 to $100 plans',
                href: '/products?category=icons&sort=desc',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: '+$100 plans',
                href: '/products?category=icons',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
        ],
    },
    {
        label: 'Custom Design',
        value: 'custom_design',
        //featured: [
          //  {
           //     name: 'Favorite Icon Picks',
           //     href: "/products?category=icons",
            //    imageSrc: '/nav/icons/picks.jpg',
            //},
            //{
            //    name: 'New Arrivals',
            //    href: '/products?category=icons&sort=desc',
             //   imageSrc: '/nav/icons/new.jpg',
           // },
           // {
             //   name: 'Bestselling Icons',
            //    href: '/products?category=icons',
             //   imageSrc: '/nav/icons/bestsellers.jpg',
           // },
       // ],
    },
];

