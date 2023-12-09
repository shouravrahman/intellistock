Welcome to Intellistock Inventory Management Web App — a comprehensive solution for efficiently creating and managing items, categories, brands, units, warehouses, and suppliers. Tailored to meet specific needs, our user-friendly interface empowers you to take control of your inventory effortlessly.

![FancyWM_SBRsbvC68u](https://github.com/shouravrahman/intellistock/assets/73746355/1e1e9680-8d7f-4f7a-85f8-204553e38fe2)
![FancyWM_OuaTXuxxEy](https://github.com/shouravrahman/intellistock/assets/73746355/4bdb3410-b00f-44c4-bb4c-8f249244bacb)
![FancyWM_Opy5fKzpW3](https://github.com/shouravrahman/intellistock/assets/73746355/ec062654-362f-451c-8e8e-0f8eb4d93c49)
![FancyWM_T0WiheLzEl](https://github.com/shouravrahman/intellistock/assets/73746355/2c37a588-1e74-4343-8c71-79e3567d14a6)
![FancyWM_gJKXQXWUp4](https://github.com/shouravrahman/intellistock/assets/73746355/8abe4aa5-e4db-4a57-9be6-aeacbf4e4ab0)

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
