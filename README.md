# StockMaster

StockMaster is a full-stack inventory management system designed to streamline stock tracking, user authentication, and product management for small to medium businesses. Built with a modern MERN stack and scalable backend architecture, it offers intuitive dashboards, secure login flows, and real-time inventory updates.

🚀 Features
- 🔐 User Authentication: Secure login and registration using JWT and hashed credentials.
- 📦 Inventory Tracking: Add, update, and delete stock items with quantity and category filters.
- 📊 Dashboard Analytics: Visual summaries of stock levels, low inventory alerts, and recent activity.
- 🧾 Transaction Logs: Record incoming/outgoing stock movements with timestamps.
- 🛠️ Admin Controls: Role-based access for managing users and inventory.
- 🌐 Responsive Frontend: Built with React and Tailwind for seamless desktop and mobile experience.

🏗️ Tech Stack
================================
|  Frontend | React[typescript]| 
================================
|  Backend  | Node & Expressjs | 
================================
|  Database |    MongoDB       | 
================================



📁 Folder Structure
StockMaster/
├── client/           # React frontend
├── server/           # Express backend
│   ├── model/        # Mongoose schemas
│   ├── routes/       # API endpoints
│   ├── controller/   # Business logic
│   └── .env          # Environment variables
└── README.md



🧑‍💻 Getting Started
- Clone the repo
git clone https://github.com/YashThakur-997/Stock_Master.git
- Install dependencies
cd server
npm install
cd ../client
npm install
- Configure environment
- Create a .env file in server/ with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
- Run the app
cd server
npm start



📌 TODOs & Enhancements
- [ ] Export inventory reports (PDF/CSV)
- [ ] Integrate push notifications for low stock


