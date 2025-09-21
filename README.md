# 🎮 Enoverse - AI-Powered Web3 RPG

<div align="center">


**Enter the ultimate AI-powered Web3 multiplayer strategy RPG. Mint evolving NFT characters, explore dynamic quests, and build your legend in the cyberpunk metaverse.**


[🚀 Live Demo](https://eno-verse.netlify.app/) • [ Demo Video]((https://youtu.be/DprfzvKsGOs?si=wW9EEgB7RyHCPQB0))

</div>

---

## 🌟 What is Enoverse?

Enoverse is a revolutionary **AI-powered Web3 RPG** that combines artificial intelligence with blockchain technology to create truly living digital assets. Our NFT characters don't just sit in your wallet - they **evolve, learn, and grow** through advanced AI algorithms that analyze your gameplay patterns.

### Current Stage: Working Prototype ✅

We've built a **fully functional frontend prototype** that demonstrates our core vision:
- Interactive character cards with dynamic stats and progression systems
- AI quest generation simulation with personalized missions
- Responsive cyberpunk-themed UI matching our game aesthetic
- Real-time character selection and minting simulation

---


### View Live Demo
Visit our [working prototype](https://eno-verse.netlify.app/)

---

## 💻 Current Tech Stack

### Prototype (Current Implementation)
```json
{
  "frontend": {
    "language": "HTML5 + CSS3 + JavaScript ES6+",
    "styling": "Tailwind CSS 3.4+ (CDN)",
    "icons": "Lucide Icons",
    "fonts": "Inter (Google Fonts)",
    "deployment": "Static files - deployable anywhere"
  },
  "features": {
    "ui_framework": "JavaScript with modern ES6+",
    "state_management": "JavaScript objects and variables",
    "animations": "CSS transitions and keyframes",
    "responsive_design": "Tailwind responsive utilities",
    "wallet_simulation": "JavaScript wallet connection mockup"
  }
}
```

### Planned Full Stack (Development Roadmap)

#### Frontend Technologies
```json
{
  "framework": "React 18.2+ with TypeScript 5.0+",
  "styling": "Tailwind CSS 3.4+ with custom cyberpunk theme",
  "routing": "Wouter 3.0+ (lightweight routing)",
  "state": "TanStack Query 5.0+ for server state",
  "web3": "ethers.js 6.0+ for blockchain integration",
  "ui_components": "Radix UI + shadcn/ui component system",
  "icons": "Lucide React",
  "fonts": "Inter, Poppins (cyberpunk aesthetics)",
  "bundler": "Vite 5.0+ for fast development",
  "animations": "CSS transitions + JavaScript interactions"
}
```

#### Backend Technologies
```json
{
  "runtime": "Node.js 18+",
  "framework": "Express.js 4.18+",
  "language": "TypeScript 5.0+",
  "database": "PostgreSQL 15+ with Drizzle ORM 0.30+",
  "validation": "Zod 3.22+ for type-safe schemas",
  "auth": "Session-based with wallet signatures",
  "api": "RESTful endpoints with JSON responses"
}
```

#### AI/ML Integration
```json
{
  "primary_ai": "Google Gemini Pro API",
  "use_cases": [
    "Character evolution based on gameplay patterns",
    "Dynamic quest generation with personalized content",
    "Economy balancing through AI analysis",
    "Procedural content creation"
  ],
  "integration": "REST API calls to AI services",
  "data_flow": "Gameplay data → AI analysis → Character updates"
}
```

#### Blockchain Stack
```json
{
  "network": "Polygon PoS (low-cost, fast transactions)",
  "development": "Hardhat 2.0+ for smart contract development",
  "language": "Solidity 0.8.19+",
  "standards": [
    "ERC-721 (Character NFTs)",
    "ERC-20 (ENOV utility token)",
    "ERC-2981 (NFT royalties)"
  ],
  "wallet_integration": "MetaMask + WalletConnect",
  "storage": "IPFS for NFT metadata"
}
```

---

## 🎮 Current Features (Prototype)

### ✅ Implemented
- **Character Gallery**: 3 unique archetypes (Hunter, Guardian, Techmancer)
- **Interactive Cards**: Stats, rarity systems, and visual feedback
- **Wallet Integration**: Simulated MetaMask connection with balance display  
- **Quest Generator**: AI-powered quest creation with difficulty levels
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Cyberpunk UI**: Dark theme with purple/pink gradients
- **Toast Notifications**: Real-time feedback for user actions
- **Character Selection**: Visual selection with hover effects

### 🔨 Character System
Each character includes:
- **Archetype**: Hunter, Guardian, or Techmancer
- **Rarity Tiers**: Common, Rare, Epic, Legendary
- **Dynamic Stats**: Attack, Defense, Speed, Intelligence
- **Level Progression**: Visual level indicators
- **Mint Pricing**: MATIC-based pricing structure

### 🎯 Quest System Demo
- **Difficulty Scaling**: Easy, Medium, Hard quests
- **Reward Structure**: ENOV tokens + equipment rewards
- **Time Limits**: Realistic quest completion windows
- **AI Generation**: Simulated personalized quest creation

---

## 📁 Current Project Structure

```
enoverse/
├── index.html              
├── README.md              
├── LICENSE               
├── images/               
          

```

### Single-File Architecture
Our current prototype uses a **single HTML file** approach for maximum simplicity and deployability:
- **HTML**: Semantic structure with modern standards
- **CSS**: Embedded Tailwind classes + custom styles
- **JavaScript**: ES6+ with modular functions
- **No Build Process**: Runs directly in any modern browser
- **Zero Dependencies**: Self-contained with CDN resources

---

## 🎨 Design System

### Color Palette
```css
* Primary Colors *
--primary: hsl(280 100% 70%);        
--secondary: hsl(320 100% 75%);      
--accent: hsl(180 100% 70%);        
--background: #0D0D0D;              
--card: rgba(30, 30, 30, 0.8);      

* Character Rarity Colors *
--epic: #A855F7;                    
--legendary: #F59E0B;               
--rare: #3B82F6;                    
--common: #6B7280;                  
```

### Typography
- **Headings**: Inter, weights 700-900
- **Body Text**: Inter, weights 400-600  
- **Code/Addresses**: Courier New (monospace)

### Component Patterns
- **Cards**: Rounded corners (16px), subtle borders, backdrop blur
- **Buttons**: Gradient backgrounds, hover animations, consistent padding
- **Stats Bars**: Gradient fills, smooth animations, percentage-based widths

---

## 🚀 Deployment Options

### Static Hosting (Current)
The prototype can be deployed to any static hosting service:

```bash
# Netlify (drag & drop)
# Just upload the index.html file

# Vercel
npx vercel --prod

# GitHub Pages
# Push to gh-pages branch

# Any web server
# Upload index.html to public folder
```


---

## 🔮 Next Development Phases

### Phase 1: React Migration (Next Sprint)
- [ ] Convert to React + TypeScript architecture
- [ ] Implement proper component structure
- [ ] Add proper state management with TanStack Query
- [ ] Set up Vite build process

### Phase 2: Backend Integration  
- [ ] Express.js API development
- [ ] PostgreSQL database setup with Drizzle ORM
- [ ] User authentication and session management
- [ ] RESTful API endpoints for game actions

### Phase 3: AI Integration
- [ ] Google Gemini Pro API integration
- [ ] Character evolution algorithms
- [ ] Dynamic quest generation system
- [ ] AI-driven game balance mechanics

### Phase 4: Blockchain Integration
- [ ] Smart contract development (Solidity)
- [ ] NFT minting and management
- [ ] ENOV token implementation
- [ ] MetaMask wallet integration

---

## 🧪 Testing Strategy

### Current Testing
- [x] **Manual Testing**: All features tested across browsers
- [x] **Responsive Testing**: Mobile, tablet, desktop compatibility
- [x] **User Experience**: Smooth interactions and feedback

### Planned Testing
- [ ] **Unit Tests**: Jest for individual functions
- [ ] **Integration Tests**: API endpoint testing
- [ ] **E2E Tests**: Playwright for user journeys  
- [ ] **Smart Contract Tests**: Hardhat for blockchain logic

---

## 🤝 Contributing

We welcome contributions to Enoverse! Here's how you can help:

### Current Contribution Areas
- **UI/UX Improvements**: Enhance the prototype design
- **Feature Additions**: Add new interactive elements
- **Bug Fixes**: Report and fix any issues
- **Documentation**: Improve README and docs

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Make changes to `index.html` or add new files
4. Test across different browsers and devices
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request



<div align="center">

**Built with ❤️ for the Web3 Gaming Community**

*Currently in prototype phase - building the future of AI-powered gaming*

</div>
