import { expenses, payroll, reporting, vat_returns} from '../public/assets/'
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";


export const navLinks = [
    {
      key: "products",
      text: "Products",
      href: "/products",
      sublinks: [
        {
          key: "products-dle",
          text: "Digital Learning Ecosystem",
          description: "A digital learning ecosystem that helps you create, manage, and deliver learning experiences.",
          href: "/products/dle",
        },
      ]
    },
    {
      key: "docs",
      text: "Documentation",
      href: "/docs",
      sublinks:[
        {
          key: "docs-whats-dle",
          text: "What is the DLE?",
          href: "/docs/dle",
        }
      ]
    },
    {
      key: "pricing",
      text: "Pricing",
      href: "/pricing",
    },
  ];

  export const subscriptionPlans = [
    {
      name: "Starter",
      price: "$100",
      description: "A digital learning ecosystem that helps you create, manage, and deliver learning experiences.",
      href: "/pricing/starter",
      features: [
        {
          text:"TLA Maturity Level 1",
        }
      ]
    },
    {
      name: "Small Business",
      price: "$250",
      description: "A digital learning ecosystem that helps you create, manage, and deliver learning experiences.",
      href: "/pricing/small-business",
      features: [
        {
          text:"TLA Maturity Level 3",
        }
      ]
    },
    {
      name: "Enterprsie",
      price: "$500",
      description: "A digital learning ecosystem that helps you create, manage, and deliver learning experiences.",
      href: "/pricing/small-business",
      features: [
        {
          text:"TLA Maturity Level 5",
        }
      ]
    },
  ];

 export const docsNavLinks = [
    {
      icon: PresentationChartBarIcon,
      key: "docs-dle",
      text: "Digital Learning Ecosystem",
      href: "/docs-dle",
    },
  ];

  export const footerLinks = [
    {
      title: 'For developers',
      links: [
        'Go Pro!',
        'Explore development work',
        'Development blog',
        'Code podcast',
        'Open-source projects',
        'Refer a Friend',
        'Code of conduct',
      ],
    },
    {
      title: 'Hire developers',
      links: [
        'Post a job opening',
        'Post a freelance project',
        'Search for developers',
      ],
    },
    {
      title: 'Brands',
      links: [
        'Advertise with us',
      ],
    },
    {
      title: 'Company',
      links: [
        'About',
        'Careers',
        'Support',
        'Media kit',
        'Testimonials',
        'API',
        'Terms of service',
        'Privacy policy',
        'Cookie policy',
      ],
    },
    {
      title: 'Directories',
      links: [
        'Development jobs',
        'Developers for hire',
        'Freelance developers for hire',
        'Tags',
        'Places',
      ],
    },
    {
      title: 'Development assets',
      links: [
        'Code Marketplace',
        'GitHub Marketplace',
        'NPM Registry',
        'Packagephobia',
      ],
    },
    {
      title: 'Development Resources',
      links: [
        'Freelancing',
        'Development Hiring',
        'Development Portfolio',
        'Development Education',
        'Creative Process',
        'Development Industry Trends',
      ],
    },
  ];
  

  const features = [
    {
      title: 'Payroll',
      description:
        "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
      image: payroll,
    },
    {
      title: 'Claim expenses',
      description:
        "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
      image: expenses,
    },
    {
      title: 'VAT handling',
      description:
        "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
      image: vat_returns,
    },
    {
      title: 'Reporting',
      description:
        'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
      image: reporting,
    },
  ]