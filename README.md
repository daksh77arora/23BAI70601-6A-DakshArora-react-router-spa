# 🚀 React Router SPA - Complete Routing Implementation

A comprehensive Single Page Application demonstrating advanced React Router concepts including nested routes, dynamic routing, protected routes, and authentication flow.

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![React Router](https://img.shields.io/badge/React%20Router-6.20.0-red?logo=react-router)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple?logo=vite)

## 📚 Project Overview

This project was developed as **Experiment 3** for the **Full Stack - II (23CSH-382)** course, demonstrating the implementation of client-side routing in Single Page Applications using React Router DOM v6.

### 🎓 Course Information
- **Course:** Full Stack - II (23CSH-382)
- **Program:** AI201 - 4th Semester
- **Department:** AIT-CSE CORE & AIML
- **Instructor:** Mr. Prince Pal Singh
- **Session:** 2025-26 (Jan-Jun 2026)

## ✨ Features Implemented

### Core Routing Features
- ✅ **Client-Side Routing** - Instant navigation without page reloads using BrowserRouter
- ✅ **Active Navigation States** - NavLink components with automatic active highlighting
- ✅ **Dynamic Routes** - URL parameters for product detail pages (`/products/:id`)
- ✅ **Nested Routes** - Layout component with Outlet for consistent navigation
- ✅ **Protected Routes** - Authentication guards for secure dashboard access
- ✅ **404 Error Handling** - Wildcard route for unmatched URLs
- ✅ **Programmatic Navigation** - useNavigate hook for button/form-triggered navigation
- ✅ **Breadcrumb Navigation** - Dynamic breadcrumbs generated from current path

### Additional Features
- 🎨 Modern, responsive UI with gradient backgrounds
- 🔐 Simple authentication system with login/logout
- 📱 Mobile-friendly responsive design
- ⚡ Lightning-fast development with Vite
- 🎯 Clean, organized component structure

## 📁 Project Structure

```
routing-spa/
├── src/
│   ├── components/
│   │   ├── Breadcrumbs.jsx       # Dynamic breadcrumb navigation
│   │   ├── Layout.jsx             # Main layout with navigation
│   │   └── ProtectedRoute.jsx     # Authentication guard component
│   ├── pages/
│   │   ├── Home.jsx               # Landing page with features
│   │   ├── About.jsx              # Project information
│   │   ├── Products.jsx           # Product listing page
│   │   ├── ProductDetail.jsx      # Dynamic product details
│   │   ├── Contact.jsx            # Contact form with navigation
│   │   ├── Login.jsx              # Authentication page
│   │   ├── Dashboard.jsx          # Protected dashboard
│   │   └── NotFound.jsx           # 404 error page
│   ├── utils/
│   │   └── auth.js                # Authentication utility
│   ├── App.jsx                    # Main app with route configuration
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── public/
│   └── _redirects                 # Netlify deployment config
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
├── vercel.json                    # Vercel deployment config
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-router-spa-demo.git
   cd react-router-spa-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |

## 🎯 Key Routing Concepts Demonstrated

### 1. BrowserRouter Setup
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* Nested routes */}
    </Route>
  </Routes>
</BrowserRouter>
```

### 2. Dynamic Routes with Parameters
```jsx
<Route path="products/:id" element={<ProductDetail />} />
```

Access params in component:
```jsx
const { id } = useParams();
```

### 3. Protected Routes
```jsx
<Route
  path="dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

### 4. Programmatic Navigation
```jsx
const navigate = useNavigate();
navigate('/products');
```

### 5. Active Navigation Links
```jsx
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'active' : ''}
>
  About
</NavLink>
```

### 6. Nested Routes with Layout
```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>
```

Layout component uses `<Outlet />` to render child routes.

## 🔐 Authentication Flow

1. **Access Protected Route** → Redirected to `/login`
2. **Login with Credentials** → Auth state updated
3. **Access Dashboard** → Granted access
4. **Logout** → Auth cleared, redirected to home

> **Note:** This is a demo authentication system. In production, use secure backend authentication with JWT tokens.

## 📄 Pages Overview

| Page | Route | Description | Protection |
|------|-------|-------------|------------|
| Home | `/` | Landing page with feature showcase | Public |
| About | `/about` | Project information and technologies | Public |
| Products | `/products` | Product listing with grid layout | Public |
| Product Detail | `/products/:id` | Dynamic product details | Public |
| Contact | `/contact` | Contact form with validation | Public |
| Login | `/login` | Authentication page | Public |
| Dashboard | `/dashboard` | Protected user dashboard | Protected |
| 404 | `*` | Not found error page | Public |

## 🛠️ Technologies Used

- **React 18.2.0** - UI library
- **React Router DOM 6.20.0** - Client-side routing
- **Vite 5.0.0** - Build tool and dev server
- **CSS3** - Styling with gradients and animations

## 🌐 Deployment

### Netlify
1. Create `public/_redirects` file (already included):
   ```
   /* /index.html 200
   ```
2. Deploy via Netlify CLI or Git integration

### Vercel
1. `vercel.json` configuration (already included)
2. Deploy via Vercel CLI or Git integration

### GitHub Pages
Requires hash routing or custom server configuration for SPA support.

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🎨 UI/UX Features

- **Gradient Background** - Modern purple gradient theme
- **Card-based Layout** - Clean, organized content presentation
- **Hover Effects** - Interactive element transitions
- **Active States** - Visual feedback for current page
- **Smooth Animations** - CSS transitions for better UX
- **Breadcrumb Navigation** - Easy path tracking
- **Authentication Badge** - Visual login status indicator

## 🧪 Testing the Application

### Test Client-Side Routing
1. Navigate between pages - notice no page reload
2. Check browser back/forward buttons work correctly
3. Bookmark a page and return to it

### Test Dynamic Routes
1. Go to Products page
2. Click any product
3. URL changes to `/products/[id]`
4. Product details load dynamically

### Test Protected Routes
1. Try accessing `/dashboard` without login → Redirected to login
2. Login with any credentials
3. Access `/dashboard` → Successfully loaded
4. Logout → Redirected to home

### Test 404 Handling
1. Visit non-existent route like `/random-page`
2. 404 page displays with navigation options

## 📚 Learning Outcomes

By completing this project, you'll understand:

1. ✅ How to set up React Router in a React application
2. ✅ Difference between BrowserRouter and HashRouter
3. ✅ Creating nested routes with layouts
4. ✅ Implementing dynamic routes with URL parameters
5. ✅ Building protected routes with authentication
6. ✅ Using navigation hooks (useNavigate, useLocation, useParams)
7. ✅ Handling 404 errors with wildcard routes
8. ✅ Implementing breadcrumb navigation
9. ✅ Managing authentication state
10. ✅ Deploying SPAs to hosting platforms

## 🤝 Contributing

This is an educational project, but contributions are welcome!

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is created for educational purposes as part of university coursework.

## 👨‍💻 Author

Created as part of Full Stack - II course requirements.

 - Fast build tool setup

