export const PRODUCT_CATEGORIES = [
  {
    label: 'By Style',
    value: 'by_style' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=ui_kits`,
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
    label: 'By Size',
    value: 'by_size' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: `/products?category=icons`,
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
  
   {
    label: 'By Budget',
    value: 'by_budget' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: `/products?category=icons`,
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

