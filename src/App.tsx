/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X, 
  ArrowRight,
  Wheat,
  Container,
  Truck,
  Factory,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Award,
  Zap
} from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { id: 'soybean_meal', icon: <Wheat className="w-8 h-8" />, image: '/imagens/jrm-soja.png' },
    { id: 'sugar', icon: <Container className="w-8 h-8" />, image: '/imagens/jrm-acucar.png' },
    { id: 'corn', icon: <Wheat className="w-8 h-8" />, image: '/imagens/jrm-milho.png' },
    { id: 'animal_protein', icon: <Factory className="w-8 h-8" />, image: '/imagens/jrm-proteina.png' },
  ];

  return (
    <div className="min-h-screen bg-agro-paper font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-agro-green' : 'text-white'}`}>
                JRM AGRO
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#home" className={`text-xs font-bold uppercase tracking-widest hover:text-agro-gold transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}>{t.nav.home}</a>
              <a href="#about" className={`text-xs font-bold uppercase tracking-widest hover:text-agro-gold transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}>{t.nav.about}</a>
              <a href="#products" className={`text-xs font-bold uppercase tracking-widest hover:text-agro-gold transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}>{t.nav.products}</a>
              <a href="#contact" className={`text-xs font-bold uppercase tracking-widest hover:text-agro-gold transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}>{t.nav.contact}</a>
              
              <div className="flex items-center space-x-2 border-l border-slate-300/30 pl-8 ml-2">
                <button onClick={() => setLang('pt')} className={`text-[10px] font-black px-2 py-1 rounded transition-colors ${lang === 'pt' ? 'bg-agro-green text-white' : scrolled ? 'text-slate-400 hover:text-agro-green' : 'text-white/50 hover:text-white'}`}>PT</button>
                <button onClick={() => setLang('en')} className={`text-[10px] font-black px-2 py-1 rounded transition-colors ${lang === 'en' ? 'bg-agro-green text-white' : scrolled ? 'text-slate-400 hover:text-agro-green' : 'text-white/50 hover:text-white'}`}>EN</button>
                <button onClick={() => setLang('es')} className={`text-[10px] font-black px-2 py-1 rounded transition-colors ${lang === 'es' ? 'bg-agro-green text-white' : scrolled ? 'text-slate-400 hover:text-agro-green' : 'text-white/50 hover:text-white'}`}>ES</button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled ? 'text-slate-900' : 'text-white'}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50">{t.nav.home}</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50">{t.nav.about}</a>
                <a href="#products" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50">{t.nav.products}</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-emerald-50">{t.nav.contact}</a>
                <div className="flex space-x-4 px-3 py-4 border-t border-slate-100 mt-2">
                  <button onClick={() => setLang('pt')} className={`text-sm font-bold ${lang === 'pt' ? 'text-emerald-600' : 'text-slate-400'}`}>PT</button>
                  <button onClick={() => setLang('en')} className={`text-sm font-bold ${lang === 'en' ? 'text-emerald-600' : 'text-slate-400'}`}>EN</button>
                  <button onClick={() => setLang('es')} className={`text-sm font-bold ${lang === 'es' ? 'text-emerald-600' : 'text-slate-400'}`}>ES</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/imagens/jrm-capa.png" 
            alt="JRM Agro Background" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-agro-green/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl flex flex-col items-center"
          >
            <div className="inline-block px-4 py-1 bg-agro-gold/20 backdrop-blur-sm border border-agro-gold/30 text-agro-gold rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              Premium Agro Industry
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-[0.9] mb-8 tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-2xl font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-10 py-5 bg-agro-gold text-white font-bold rounded-full hover:bg-agro-gold/90 transition-all group shadow-xl shadow-agro-gold/20"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-white/5 backdrop-blur-md text-white border border-white/20 font-bold rounded-full hover:bg-white/10 transition-all"
              >
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats / Features Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-xl border-t border-white/10 hidden lg:block">
          <div className="max-w-7xl mx-auto grid grid-cols-4 divide-x divide-white/10">
            <div className="p-8 flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold">Global Trade</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">Export & Import</p>
              </div>
            </div>
            <div className="p-8 flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold">Logistics</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">Efficient Delivery</p>
              </div>
            </div>
            <div className="p-8 flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold">Industry</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">Quality Processing</p>
              </div>
            </div>
            <div className="p-8 flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                <Container className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-bold">Storage</p>
                <p className="text-white/50 text-xs uppercase tracking-wider">Safe Warehousing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-agro-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <div className="inline-block px-4 py-1.5 bg-agro-green/5 text-agro-green rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-agro-green/10">
                {t.nav.about}
              </div>
              <h2 className="text-5xl font-serif font-bold mb-10 leading-tight text-agro-green">
                {t.about.title}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 font-light">
                {t.about.content}
              </p>
              
              <div className="grid grid-cols-3 gap-10 w-full mb-12">
                <div className="flex flex-col items-center md:items-start">
                  <div className="p-3 bg-agro-gold/10 rounded-2xl text-agro-gold mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-agro-green text-lg mb-2">{t.about.mission}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.about.missionText}</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="p-3 bg-agro-gold/10 rounded-2xl text-agro-gold mb-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-agro-green text-lg mb-2">{t.about.vision}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.about.visionText}</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="p-3 bg-agro-gold/10 rounded-2xl text-agro-gold mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-agro-green text-lg mb-2">{t.about.values}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.about.valuesText}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 w-full pt-10 border-t border-slate-200">
                <div>
                  <h4 className="font-serif font-bold text-agro-gold text-4xl mb-2">15+</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.about.years}</p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-agro-gold text-4xl mb-2">800+</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.about.partners}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-3xl bg-slate-200 relative group">
                <img 
                  src="/imagens/jrm-modelo.png" 
                  alt="Agriculture" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-green/60 to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[32px] shadow-2xl hidden lg:block max-w-xs border border-slate-100">
                <div className="text-agro-gold mb-4">
                  <Award className="w-10 h-10" />
                </div>
                <p className="italic text-slate-700 font-serif text-lg leading-relaxed">
                  "{t.about.quote}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-32 bg-agro-green text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-white/20">
                International Trade
              </div>
              <h2 className="text-5xl font-serif font-bold mb-8 leading-tight">
                {t.global.title}
              </h2>
              <p className="text-xl text-white/70 leading-relaxed mb-12 font-light">
                {t.global.subtitle}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center space-x-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-agro-gold rounded-2xl">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.global.countries}</h4>
                    <p className="text-sm text-white/50">China, Europa, Oriente Médio, África</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-agro-gold rounded-2xl">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.global.logistics}</h4>
                    <p className="text-sm text-white/50">Portos de Santos, Paranaguá e Vitória</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1 bg-agro-gold/10 text-agro-gold rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              Our Portfolio
            </div>
            <h2 className="text-5xl font-serif font-bold mb-6 text-agro-green">{t.products.title}</h2>
            <div className="w-24 h-1 bg-agro-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[32px] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={t.products[product.id as keyof typeof t.products]} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-agro-green/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl text-agro-green shadow-lg">
                    {product.icon}
                  </div>
                </div>
                <div className="p-8 text-center flex flex-col items-center">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-agro-green">
                    {t.products[product.id as keyof typeof t.products]}
                  </h3>
                  <p className="text-sm text-slate-500 mb-8 font-light leading-relaxed">
                    {t.products.description}
                  </p>
                  <a href="#contact" className="px-6 py-3 border border-agro-gold text-agro-gold font-bold text-xs rounded-full hover:bg-agro-gold hover:text-white transition-all uppercase tracking-widest">
                    {t.products.learnMore}
                  </a>
                </div>
              </motion.div>
            ))}

            {/* General Food Products Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group bg-agro-green rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/imagens/jrm-capa.png" 
                  alt="General Food" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-green to-transparent"></div>
                <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white shadow-lg border border-white/20">
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 text-center flex flex-col items-center flex-grow justify-center">
                <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                  {t.products.generalFood}
                </h3>
                <p className="text-sm text-white/60 mb-8 font-light leading-relaxed">
                  {t.products.generalFoodDesc}
                </p>
                <a href="#contact" className="px-6 py-3 bg-agro-gold text-white font-bold text-xs rounded-full hover:bg-agro-gold/90 transition-all uppercase tracking-widest">
                  {t.products.learnMore}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Portfolio CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 bg-agro-paper border border-agro-gold/20 rounded-[40px] text-center"
          >
            <p className="text-xl font-serif text-agro-green mb-6">
              {t.products.portfolioCTA}
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-agro-gold font-bold uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
            >
              {t.nav.contact} <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-32 bg-agro-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-white/20">
                Get in Touch
              </div>
              <h2 className="text-5xl font-serif font-bold mb-12">{t.contact.title}</h2>
              <div className="space-y-10 w-full">
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:space-x-6">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <MapPin className="w-6 h-6 text-agro-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">{t.contact.address}</h4>
                    <p className="text-white/50 font-light">
                      SETO SCN QD 01 BL F 79 SL 1013 PARTE A<br />
                      BAIRRO ASA NORTE CEP 70711-905 BRASILIA-DF
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:space-x-6">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Mail className="w-6 h-6 text-agro-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">{t.contact.email}</h4>
                    <p className="text-white/50 font-light">contato@jrmagro.com.br</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:space-x-6">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Phone className="w-6 h-6 text-agro-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">{t.contact.phone}</h4>
                    <p className="text-white/50 font-light">+351 916 806 780</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-10 bg-white/5 border border-white/10 rounded-[40px] w-full">
                <h4 className="font-serif font-bold text-2xl mb-6 text-agro-gold">{t.contact.legalInfo}</h4>
                <div className="space-y-3">
                  <p className="text-sm text-white/40 font-light"><span className="text-white/60 font-bold">{t.contact.companyName}:</span> JRM AGRO INDUSTRIAL E MERCANTIL LTDA</p>
                  <p className="text-sm text-white/40 font-light"><span className="text-white/60 font-bold">CNPJ:</span> 33.458.878/0001-24</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-3xl">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{t.contact.name}</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-agro-gold focus:border-transparent outline-none text-slate-900 transition-all"
                      placeholder={t.contact.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{t.contact.email}</label>
                    <input 
                      type="email" 
                      className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-agro-gold focus:border-transparent outline-none text-slate-900 transition-all"
                      placeholder="email@exemplo.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{t.contact.message}</label>
                  <textarea 
                    rows={5}
                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-agro-gold focus:border-transparent outline-none text-slate-900 transition-all"
                    placeholder={t.contact.messagePlaceholder}
                  ></textarea>
                </div>
                <button className="w-full py-5 bg-agro-green text-white font-bold rounded-2xl hover:bg-agro-green/90 transition-all shadow-2xl shadow-agro-green/20 uppercase tracking-[0.2em] text-xs">
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-950 text-white/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-serif font-bold text-white tracking-tight">JRM AGRO</span>
            </div>
            <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em]">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#products" className="hover:text-white transition-colors">Products</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="w-full h-px bg-white/5"></div>
            <div className="flex flex-col md:flex-row justify-between w-full items-center space-y-4 md:space-y-0">
              <div className="text-xs font-light">
                &copy; {new Date().getFullYear()} JRM AGRO. {t.footer.rights}
                {/* Build: 2026-04-18-v5 - Folder: public/imagens */}
              </div>
              <div className="text-xs font-mono tracking-tighter">
                {t.footer.tax_id}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50 group">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-full right-0 mb-4 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl text-sm font-bold whitespace-nowrap pointer-events-none"
        >
          {lang === 'pt' ? 'Fale Conosco' : lang === 'es' ? 'Contáctenos' : 'Contact Us'}
          <div className="absolute top-full right-6 border-8 border-transparent border-t-white"></div>
        </motion.div>
        
        <motion.a
          href="https://wa.me/351916806780"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ 
            scale: 1.15, 
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.9 }}
          className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
          aria-label="Contact on WhatsApp"
        >
          {/* Pulse Ring Effect */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40"></div>
          
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-current relative z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
