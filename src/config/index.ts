export const PRODUCT_CATEGORIES = [
  {
     label: 'By Style',
        value: 'by_style' as const,
        featured: [
            {
                name: 'maisonette',
                href: "/products?category=ui_kits",
                imageSrc: '/nav/ui-kits/moise.webp',
            },
            {
                name: 'bungalow',
                href: '/products?category=ui_kits&sort=desc',
                imageSrc: '/nav/ui-kits/bungalo.webp',
            },
            {
                name: 'Modern',
                href: '/products?category=ui_kits',
                imageSrc: '/nav/ui-kits/modern.webp',
            },
        ],
    },
  {
    label: 'By Size',
        value: 'by_size' as const,
        featured: [
            {
                name: '1&2 Bedrooms',
                href: "/products?category=icons",
                imageSrc: '/nav/ui-kits/2beds.webp',
            },
            {
                name: '3&4 Bedrooms',
                href: '/products?category=icons&sort=desc',
                imageSrc: '/nav/ui-kits/2bdss.webp',
            },
            {
                name: '+5 Bedrooms',
                href: '/products?category=icons',
                imageSrc: '/nav/ui-kits/5 beds above.webp',
            },
        ],
    },
   {
     label: 'By Feature',
        value: 'by_feature' as const,
        featured: [
            {
                name: 'Fireplace',
                href: "/products?category=icons",
                imageSrc: '/nav/ui-kits/fireplace.webp',
            },
            {
                name: 'Open kitchen',
                href: '/products?category=icons&sort=desc',
                imageSrc: '/nav/ui-kits/open kitchen.jpg',
            },
            {
                name: 'Basement',
                href: '/products?category=icons',
                imageSrc: '/nav/ui-kits/basement.webp',
            },
        ],
    },
   {
     label: 'By Budget',
        value: 'by_budget' as const,
        featured: [
            {
                name: 'Under $40 plans',
                href: "/products?category=icons",
                imageSrc: '/nav/ui-kits/below101.webp',
            },
            {
                name: '$40 to $100 plans',
                href: '/products?category=icons&sort=desc',
                imageSrc: '/nav/ui-kits/below100.webp',
            },
            {
                name: '+$100 plans',
                href: '/products?category=icons',
                imageSrc: '/nav/ui-kits/5 beds above.webp',
            },
        ],
    },
   {
        label: 'Custom Design',
        value: 'custom_design',
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

