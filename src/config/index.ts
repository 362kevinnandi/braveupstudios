export const PRODUCT_CATEGORIES = [
  {
     label: 'By Style',
        value: 'by_style' as const,
        featured: [
            {
                name: 'maisonette',
                href: "/products?category=by_style",
                imageSrc: '/nav/ui-kits/moise.webp',
            },
            {
                name: 'bungalow',
                href: '/products?category=by_style&sort=desc',
                imageSrc: '/nav/ui-kits/bungalo.webp',
            },
            {
                name: 'Modern',
                href: '/products?category=by_style',
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
                href: "/products?category=by_size",
                imageSrc: '/nav/ui-kits/2beds.webp',
            },
            {
                name: '3&4 Bedrooms',
                href: '/products?category=by_size&sort=desc',
                imageSrc: '/nav/ui-kits/2bdss.webp',
            },
            {
                name: '+5 Bedrooms',
                href: '/products?category=by_size',
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
                href: "/products?category=by_feature",
                imageSrc: '/nav/ui-kits/fireplace.webp',
            },
            {
                name: 'Open kitchen',
                href: '/products?category=by_feature&sort=desc',
                imageSrc: '/nav/ui-kits/open kitchen.jpg',
            },
            {
                name: 'Basement',
                href: '/products?category=by_feature',
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
                href: "/products?category=by_budget",
                imageSrc: '/nav/ui-kits/below101.webp',
            },
            {
                name: '$40 to $100 plans',
                href: '/products?category=by_budget&sort=desc',
                imageSrc: '/nav/ui-kits/below100.webp',
            },
            {
                name: '+$100 plans',
                href: '/products?category=by_budget',
                imageSrc: '/nav/ui-kits/5 beds above.webp',
            },
        ],
    },
   {
        label: 'Custom Design',
        value: 'custom_design',
        featured: [
            {
                name: 'email:customdesigns@braveupstudios.co.ke',
                href: "#",
                imageSrc: '/nav/ui-kits/home.webp',
            },
            {
                name: 'email:customdesigns@braveupstudios.co.ke',
                imageSrc: '/nav/ui-kits/comm.webp',
                href: "mailto:customdesigns@braveupstudios.co.ke"

            },
            {
                name: 'email:customdesigns@braveupstudios.co.ke',
                href: '#',
                imageSrc: '/nav/ui-kits/flat.webp'
            },
        ],
    },
];

