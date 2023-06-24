import { expenses, payroll, reporting, vat_returns} from '../public/assets/'


export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "clients",
      title: "Clients",
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