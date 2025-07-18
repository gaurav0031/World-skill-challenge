# 🚀 World Skill Challenge - Powered by AeroBay

A modern, responsive website for the World Skill Challenge - a National & International Skill Hunt for Young Innovators. Built with Next.js, React, Framer Motion, and MongoDB.

![World Skill Challenge](https://img.shields.io/badge/Status-Active-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black)
![React](https://img.shields.io/badge/React-18.0.0-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0.0-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-blue)

## 🌟 Features

### 🎯 **Competition Categories**
- **TechFrontiers** - Robotics, AI & Machine Learning
- **HackLogic** - Coding & App Development  
- **Idea2Impact** - Young Entrepreneur Challenge
- **SoarFest** - Aeromodelling & Aviation Science
- **ThinkCreate** - Design Thinking & 3D Modelling
- **Gaming: Get.Set.Go!** - RC Car Races & BattleBot Duals

### 🏆 **Competition Stages**
1. **Online Idea/Report Submission**
2. **Virtual Bootcamp**
3. **Regional Rounds** (Mumbai | Nagpur | Kolkata | Noida)
4. **National Finale** (Delhi)
5. **International Round** (TBA)

### 💰 **Pricing Structure**
- **Free Team**: ₹0 (1 free team per school)
- **Standard Categories**: ₹499 per team
- **Gaming Category**: ₹999 per team

### ✨ **Technical Features**
- 🎨 **Modern UI/UX** with dark theme
- 📱 **Fully Responsive** design
- 🎭 **Smooth Animations** with Framer Motion
- 📝 **Team Registration** system
- 🗄️ **MongoDB** database integration
- 🔒 **Form Validation** and error handling
- ♿ **Accessibility** compliant
- 🚀 **SEO Optimized**

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/yourusername/world-skill-challenge.git
cd world-skill-challenge
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
\`\`\`env
MONGODB_URI=mongodb://localhost:27017
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/worldskillchallenge
\`\`\`

4. **Initialize the database**
\`\`\`bash
node scripts/setup-database.js
\`\`\`

5. **Run the development server**
\`\`\`bash
npm run dev
\`\`\`

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
world-skill-challenge/
├── app/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Categories.js
│   │   ├── Stages.js
│   │   ├── Pricing.js
│   │   ├── Registration.js
│   │   └── Contact.js
│   ├── api/
│   │   └── register/
│   │       └── route.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── scripts/
│   └── setup-database.js
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
\`\`\`

## 🗄️ Database Schema

### Registrations Collection
\`\`\`javascript
{
  _id: ObjectId,
  schoolName: String,
  contactPerson: String,
  email: String,
  phone: String,
  category: String,
  teamName: String,
  studentNames: [String, String, String],
  mentorName: String,
  additionalInfo: String,
  registrationDate: Date,
  status: String,
  paymentStatus: String
}
\`\`\`

### Categories Collection
\`\`\`javascript
{
  _id: ObjectId,
  name: String,
  subtitle: String,
  description: String,
  price: Number,
  maxTeams: Number
}
\`\`\`

## 🔧 API Endpoints

### Registration API
- **POST** `/api/register` - Register a new team
- **GET** `/api/register` - Get all registrations (admin)

#### Example Registration Request:
\`\`\`json
{
  "schoolName": "ABC School",
  "contactPerson": "John Doe",
  "email": "contact@abcschool.edu",
  "phone": "+91 9876543210",
  "category": "TechFrontiers (Robotics, AI & ML)",
  "teamName": "Tech Innovators",
  "studentNames": ["Student 1", "Student 2", "Student 3"],
  "mentorName": "Teacher Name",
  "additionalInfo": "Optional additional information"
}
\`\`\`

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue shades
- Secondary: Purple shades
- Accent colors for different categories

### Animations
Framer Motion animations are configured in each component:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading states

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
\`\`\`bash
git add .
git commit -m "Ready for deployment"
git push origin main
\`\`\`

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Add environment variables in Vercel dashboard

3. **Set Environment Variables**
\`\`\`
MONGODB_URI=your_mongodb_atlas_connection_string
\`\`\`

4. **Deploy**
Vercel will automatically deploy your application!

### Deploy to Other Platforms

The project can also be deployed to:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 🧪 Testing

### Manual Testing Checklist
- [ ] Navigation works on all devices
- [ ] All animations play smoothly
- [ ] Registration form validates correctly
- [ ] Database connections work
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Accessibility features work

### Running Tests
\`\`\`bash
# Add your test commands here
npm test
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 TODO / Roadmap

- [ ] Add payment integration (Razorpay/Stripe)
- [ ] Create admin dashboard
- [ ] Implement email notifications
- [ ] Add user authentication
- [ ] Create team management portal
- [ ] Add real-time statistics
- [ ] Implement search and filtering
- [ ] Add multi-language support

## 🐛 Known Issues

- None currently reported

## 📞 Support

For support and questions:
- **Email**: worldskillchallenge@aerobay.com
- **Event Incharge**: NSR – 9557******
- **Website**: www.worldskillchallenge.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **AeroBay** for organizing the World Skill Challenge
- **Next.js** team for the amazing framework
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **MongoDB** for reliable database solutions

## 📊 Project Stats

- **Lines of Code**: ~2,500+
- **Components**: 8 main components
- **API Routes**: 2 endpoints
- **Database Collections**: 2 collections
- **Responsive Breakpoints**: 3 breakpoints
- **Animation Triggers**: 20+ animations

---

**Made with ❤️ for young innovators across India and beyond!**

*Let your students step into the future — only at World Skill Challenge Powered by AeroBay!*
