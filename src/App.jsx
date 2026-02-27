import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Home from './pages/Home'
import RecipeArticle from './pages/RecipeArticle'
import Category from './pages/Category'
import About from './pages/About'
import Search from './pages/Search'
import Contact from './pages/Contact'

export default function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:slug" element={<RecipeArticle />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
