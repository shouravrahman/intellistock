Welcome to Intellistock Inventory Management Web App — a comprehensive solution for efficiently creating and managing items, categories, brands, units, warehouses, and suppliers. Tailored to meet specific needs, our user-friendly interface empowers you to take control of your inventory effortlessly.

![FancyWM_YVAwsZ9hhy](https://github.com/shouravrahman/intellistock/assets/73746355/dc8d6588-9789-4d0a-83e0-a4921740c16a)

![FancyWM_il7lsMWhlo](https://github.com/shouravrahman/intellistock/assets/73746355/5aa84e96-abc5-47f5-8c86-b8513125c5c4)
![FancyWM_uD1lnp0Tvf](https://github.com/shouravrahman/intellistock/assets/73746355/838b28b4-cb47-4ae5-b259-46f742ebfe4f)
![FancyWM_ZyFWHqHaXp](https://github.com/shouravrahman/intellistock/assets/73746355/1870a675-1831-4c4b-be0a-bcdfe3ca0ac0)

## Techonologies used:

Next.js. MongoDB · Prisma ORM · Tailwind CSS · css · react-hook-form · Zod

## Key Features:

- Item Creation: Easily add and manage items with detailed information, ensuring accurate and organized inventory records.

- Category, Brand, and Unit Management: Streamline your inventory by categorizing items, associating them with specific brands, and assigning appropriate units for precise tracking.

- Warehouse Management: Optimize your stock control across multiple warehouses. Track, monitor, and manage inventory levels efficiently.

- Supplier Integration: Seamlessly connect with your suppliers, facilitating smooth communication and ensuring a steady supply chain.

- Transfer and Add Stock: Simplify stock management with user-friendly tools for transferring stock between warehouses and adding new stock effortlessly.

- Custom Reports: Gain valuable insights into your inventory with customizable reports. Track stock movement, monitor trends, and make informed decisions.

- Scalable and Integrated: Grow your business seamlessly by integrating our web app with other tools. Enjoy a scalable solution that adapts to your evolving needs.

## Getting Started

### clone the repository

```bash
git clone https://github.com/shouravrahman/intellistock.git [folder name]
npm install
```

### Setting prisma and mongodb

- go to mongodb atlas and create a database then copy the connections string
- rename .env.example to .env and fill the fields with your own credentials

```bash
 npx prisma generate
 npx prisma db push
 npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
