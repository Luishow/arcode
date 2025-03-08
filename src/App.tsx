import React, { useState, useEffect } from 'react';
import { Calendar, Clock, DollarSign, CheckCircle2, Gift, ArrowRight, Users, Trophy, AlertCircle, GamepadIcon, TrendingUp, Target, Zap, Star, Shield } from 'lucide-react';
import flakesLogo from './logoflakes.png'
import flakesImage from './Flakes.png'
import heroImage from './fotohero.png'

function calculateTimeLeft() {
  const targetDate = new Date('2025-03-23T19:00:00-03:00'); // 23 de março de 2025 às 19h (Horário de Brasília)
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return {
    days: days.toString().padStart(2, '0'),
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0')
  };
}

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages] = useState([
    {
      id: 1,
      name: "Flakes Power",
      message: "Olá! Tudo bem? 👋",
      time: "Agora",
      isAdmin: true
    },
    {
      id: 2,
      name: "Flakes Power",
      message: "Eu vi que você ta por aqui, que tal participar da live comigo dia 25? 🚀",
      time: "Agora",
      isAdmin: true
    }
  ]);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-brand-dark bg-gradient-radial from-brand-purple/20 via-brand-dark to-brand-dark text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="animate-bounce mb-8">
            <Star className="w-16 h-16 text-brand-green mx-auto" />
          </div>
          
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-brand-green to-brand-purple bg-clip-text text-transparent">
            🎉 Você Está Dentro! Inscrição Confirmada!
          </h1>
          
          <div className="bg-brand-purple/10 rounded-2xl p-8 backdrop-blur-sm border border-brand-purple/20">
            <h2 className="text-2xl font-semibold mb-6">💡 Próximos Passos:</h2>
            
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4 bg-brand-purple/5 p-4 rounded-lg">
                <Calendar className="w-8 h-8 text-brand-green" />
                <div>
                  <h3 className="font-semibold">Marque na Agenda</h3>
                  <p>23 de março de 2025, 19:00 (Horário de Brasília)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-brand-purple/5 p-4 rounded-lg">
                <Gift className="w-8 h-8 text-brand-green" />
                <div>
                  <h3 className="font-semibold">Confira seu E-mail</h3>
                  <p>Você receberá a confirmação e o link da live em instantes</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-brand-purple/5 p-4 rounded-lg">
                <Shield className="w-8 h-8 text-brand-green" />
                <div>
                  <h3 className="font-semibold">Bônus Garantido</h3>
                  <p>Seu guia exclusivo será enviado em até 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button className="bg-brand-green text-brand-dark font-bold py-6 px-12 rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,249,97,0.3)] shadow-lg">
              Entrar no Grupo VIP Agora!
            </button>
          </div>

          <div className="mt-12 space-y-4 text-lg">
            <p className="font-semibold">Nos vemos ao vivo no dia 23 de março de 2025!</p>
            <p className="text-brand-green">🔥 Prepare-se. Essa pode ser a maior oportunidade do Fortnite nos últimos anos.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark bg-gradient-radial from-brand-purple/20 via-brand-dark to-brand-dark text-white">
      {/* Foguete */}
      <div 
        className="fixed right-8 bottom-8 transition-all duration-300 z-50"
        style={{ 
          transform: `translateY(${Math.min(0, 100 - scrollPosition/3)}px)`,
          opacity: Math.min(1, scrollPosition / 100)
        }}
      >
        <div className="relative animate-bounce-slow cursor-pointer hover:scale-110 transition-transform">
          <div className="w-12 h-16 bg-brand-green rounded-t-full relative">
            {/* Janela do foguete */}
            <div className="w-6 h-6 bg-brand-dark rounded-full absolute top-4 left-1/2 -translate-x-1/2 border-2 border-white" />
            {/* Asas */}
            <div className="absolute -left-3 bottom-2 w-3 h-6 bg-brand-purple skew-y-[45deg]" />
            <div className="absolute -right-3 bottom-2 w-3 h-6 bg-brand-purple skew-y-[-45deg]" />
          </div>
          {/* Fogo do foguete */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-4 h-8 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-full animate-pulse opacity-75" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
          {/* Conteúdo à esquerda */}
          <div className="text-left">
            <div className="flex items-center gap-4 mb-8">
              <img
                src={flakesLogo}
                alt="Flakes Power"
                className="w-32 h-auto object-contain"
              />
              <div className="bg-brand-green/10 px-4 py-1 rounded-full border border-brand-green/20">
                <p className="text-brand-green text-sm">Evento Ao Vivo e Gratuito</p>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Aprenda a Ganhar Dinheiro Real com Fortnite
            </h1>
            
            <div className="space-y-4 mb-12">
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed">
                Descubra como <span className="text-brand-green font-semibold">monetizar sua paixão por games</span> e criar uma fonte de renda consistente
              </p>
              <div className="flex items-center gap-3 text-lg text-gray-300">
                <CheckCircle2 className="w-6 h-6 text-brand-green" />
                <p>Sem precisar ser pro player</p>
              </div>
              <div className="flex items-center gap-3 text-lg text-gray-300">
                <CheckCircle2 className="w-6 h-6 text-brand-green" />
                <p>Sem precisar ter milhões de seguidores</p>
              </div>
              <div className="flex items-center gap-3 text-lg text-gray-300">
                <CheckCircle2 className="w-6 h-6 text-brand-green" />
                <p>Mesmo começando do zero</p>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full md:w-auto mt-8 bg-brand-green text-brand-dark font-bold py-5 px-8 rounded-xl transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,249,97,0.3)] flex items-center justify-center gap-3 text-lg"
              >
                <span>Quero Garantir Minha Vaga Agora!</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="relative mt-4">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Flakes Power Hero"
                className="w-full h-auto rounded-2xl border-4 border-brand-purple/20"
              />
              {/* Efeito de brilho */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-green/20 to-brand-purple/20 rounded-3xl -z-10 blur-xl" />
            </div>
            {/* Decoração */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-green/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Event Info Section */}
        <div className="bg-brand-purple/5 rounded-2xl border border-brand-purple/20 p-8 mb-24">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Countdown e Info */}
            <div>
              <div className="bg-brand-purple/10 p-6 rounded-2xl border border-brand-purple/20 mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <p className="text-brand-green font-medium">Transmissão ao vivo em:</p>
                </div>
                <div className="flex gap-4 justify-center">
                  {[
                    { value: timeLeft.days, label: 'Dias' },
                    { value: timeLeft.hours, label: 'Horas' },
                    { value: timeLeft.minutes, label: 'Min' },
                    { value: timeLeft.seconds, label: 'Seg' }
                  ].map((item, i) => (
                    <div key={i} className="bg-brand-purple/20 px-4 py-2 rounded-lg">
                      <span className="text-2xl font-bold">{item.value}</span>
                      <p className="text-xs text-gray-400">{item.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-4 text-center">
                  ⚡ Mais de 1.000 pessoas já confirmaram presença
                </p>
              </div>
            </div>
            
            {/* Cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Card Data */}
              <div className="flex items-center justify-center gap-3 bg-brand-purple/10 p-6 rounded-xl border border-brand-purple/20 backdrop-blur-sm hover:bg-brand-purple/20 transition-all transform hover:scale-105">
                <Calendar className="w-8 h-8 text-brand-green" />
                <div className="text-left flex-1">
                  <p className="font-bold text-xl">23 de março</p>
                  <p className="text-sm text-gray-300">Quinta-feira • 19h (Horário de Brasília)</p>
                </div>
                <span className="bg-brand-green/20 text-brand-green text-xs px-3 py-1 rounded-full">
                  Confirmado
                </span>
              </div>

              {/* Card Duração */}
              <div className="flex items-center justify-center gap-3 bg-brand-purple/10 p-6 rounded-xl border border-brand-purple/20 backdrop-blur-sm hover:bg-brand-purple/20 transition-all transform hover:scale-105">
                <Clock className="w-8 h-8 text-brand-green" />
                <div className="text-left flex-1">
                  <p className="font-bold text-xl">1h30 de Conteúdo</p>
                  <p className="text-sm text-gray-300">Método completo + Cases reais</p>
                </div>
                <span className="bg-brand-purple/20 text-brand-purple text-xs px-3 py-1 rounded-full">
                  Exclusivo
                </span>
              </div>

              {/* Card Preço */}
              <div className="flex items-center justify-center gap-3 bg-brand-purple/10 p-6 rounded-xl border border-brand-purple/20 backdrop-blur-sm hover:bg-brand-purple/20 transition-all transform hover:scale-105">
                <DollarSign className="w-8 h-8 text-brand-green" />
                <div className="text-left flex-1">
                  <p className="font-bold text-xl">Totalmente Gratuito</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    <p className="text-sm text-gray-300">Últimas 50 vagas disponíveis</p>
                  </div>
                </div>
                <span className="bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full">
                  Limitado
                </span>
              </div>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="mt-8 flex items-center gap-4 justify-center">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-brand-purple/30 border-2 border-brand-green" />
              ))}
            </div>
            <p className="text-sm text-gray-300">
              Junte-se a +<span className="text-brand-green font-bold">500</span> alunos que já aprenderam com o Flakes
            </p>
          </div>
        </div>

        {/* Why Now Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que participar dessa live?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-brand-purple/5 p-6 rounded-xl border border-brand-purple/20 hover:bg-brand-purple/10 transition-all">
              <TrendingUp className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Mercado em Crescimento</h3>
              <p className="text-gray-300">O mercado de UGC no Fortnite está apenas começando, com oportunidades inexploradas.</p>
            </div>
            <div className="bg-brand-purple/5 p-6 rounded-xl border border-brand-purple/20 hover:bg-brand-purple/10 transition-all">
              <Target className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Momento Perfeito</h3>
              <p className="text-gray-300">A Epic Games está investindo pesado em criadores. O momento de entrar é agora.</p>
            </div>
            <div className="bg-brand-purple/5 p-6 rounded-xl border border-brand-purple/20 hover:bg-brand-purple/10 transition-all">
              <Zap className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Conhecimento Exclusivo</h3>
              <p className="text-gray-300">Aprenda com quem já faturou milhões e conhece o mercado por dentro.</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="bg-brand-purple/5 p-8 rounded-xl border border-brand-purple/20">
              <h2 className="text-3xl font-bold mb-8">O que você vai aprender na live:</h2>
              <div className="space-y-6">
                {[
                  'As 3 formas mais rápidas de ganhar dinheiro com Fortnite – testadas e aprovadas',
                  'O segredo que influenciadores e pro players não te contam sobre monetização',
                  'O método da Level8 que já faturou milhões dentro do Fortnite',
                  'Como transformar seu tempo jogando em dinheiro real (mesmo começando do zero)',
                  'O que você precisa fazer AGORA para sair na frente da maioria'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 bg-brand-purple/5 p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-brand-purple/10 rounded-xl p-8 backdrop-blur-sm border border-brand-purple/20">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">🎁 BÔNUS EXCLUSIVO</h3>
              <p className="mb-4 text-gray-200">
                Guia Completo sobre UGC e a Nova Economia dos Games – descubra como Fortnite está criando milionários e como você pode ser o próximo!
              </p>
              <div className="space-y-3 mb-6">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" />
                  <span>Passo a passo completo</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" />
                  <span>Exemplos práticos</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" />
                  <span>Ferramentas necessárias</span>
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                required
                className="w-full px-6 py-4 rounded-xl bg-brand-purple/5 border border-brand-purple/20 focus:border-brand-green focus:outline-none text-lg"
              />
              
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="w-full px-6 py-4 rounded-xl bg-brand-purple/5 border border-brand-purple/20 focus:border-brand-green focus:outline-none text-lg mt-4"
              />
              
              <button
                type="submit"
                className="w-full bg-brand-green text-brand-dark font-bold py-5 rounded-xl transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,249,97,0.3)] flex items-center justify-center gap-3 text-lg"
              >
                <span>Quero Garantir Minha Vaga Agora!</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              
              <p className="text-sm text-center text-gray-400">
                Suas informações estão seguras e nunca serão compartilhadas
              </p>
            </form>
          </div>
        </div>

        {/* Social Proof - Melhorado */}
        <div className="bg-gradient-to-r from-brand-purple/10 to-brand-green/10 rounded-xl p-8 mb-20 border border-brand-purple/20 backdrop-blur-lg">
          <div className="flex items-center gap-8 mb-12">
            <div className="relative">
              <img
                src={flakesImage}
                alt="Flakes Power"
                className="w-32 h-32 rounded-xl border-4 border-brand-green object-cover"
              />
              <div className="absolute -bottom-3 -right-3 bg-brand-green text-brand-dark px-4 py-1 rounded-full text-sm font-bold">
                Verified
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Flakes Power</h3>
              <p className="text-brand-green text-xl font-medium">Fundador da Level8</p>
              <p className="text-gray-300 mt-2 text-lg">Especialista em Monetização de Games</p>
              <div className="flex gap-4 mt-4">
                <span className="bg-brand-purple/20 px-3 py-1 rounded-full text-sm">+10 anos exp.</span>
                <span className="bg-brand-purple/20 px-3 py-1 rounded-full text-sm">+500k alunos</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-purple/5 p-6 rounded-xl border border-brand-purple/20">
              <Users className="w-12 h-12 text-brand-green mb-4" />
              <div>
                <p className="text-3xl font-bold">12</p>
                <p className="text-lg">Estúdios Parceiros</p>
                <p className="text-sm text-gray-400 mt-2">Ativos e Lucrativos</p>
              </div>
            </div>
            <div className="bg-brand-purple/5 p-6 rounded-xl border border-brand-purple/20">
              <Trophy className="w-12 h-12 text-brand-green mb-4" />
              <div>
                <p className="text-3xl font-bold">400M+</p>
                <p className="text-lg">Jogadores</p>
                <p className="text-sm text-gray-400 mt-2">Alcançados</p>
              </div>
            </div>
            <div className="bg-brand-purple/5 p-6 rounded-xl border border-brand-purple/20">
              <DollarSign className="w-12 h-12 text-brand-green mb-4" />
              <div>
                <p className="text-3xl font-bold">Milhões</p>
                <p className="text-lg">Em Faturamento</p>
                <p className="text-sm text-gray-400 mt-2">Comprovado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="text-center bg-brand-purple/5 p-12 rounded-xl border border-brand-purple/20 mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-brand-green animate-pulse" />
            <p className="text-brand-green font-bold text-2xl">Vagas Limitadas!</p>
          </div>

          {/* Barra de Progresso */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-brand-green">87% das vagas preenchidas</span>
              <span className="text-gray-400">Restam apenas 50 vagas</span>
            </div>
            <div className="h-4 bg-brand-purple/10 rounded-full overflow-hidden border border-brand-purple/20">
              <div 
                className="h-full bg-gradient-to-r from-brand-green to-brand-purple w-[87%] rounded-full transition-all duration-1000 animate-pulse"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              ⚡ Últimas vagas sendo preenchidas agora
            </p>
          </div>

          <p className="text-2xl mb-8 max-w-2xl mx-auto">
            O tempo está passando – e cada dia que você espera, mais criadores estão faturando no Fortnite. Não perca essa oportunidade única!
          </p>
          
          <button
            onClick={handleSubmit}
            className="bg-brand-green text-brand-dark font-bold py-6 px-12 rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,249,97,0.3)] text-xl animate-bounce"
          >
            Quero Garantir Minha Vaga Agora!
          </button>
        </div>

        {/* Footer */}
        <footer className="border-t border-brand-purple/20 pt-8 pb-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center">
              <p className="text-sm text-gray-400">
                © 2024 Flakes Power. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Chat Pop-up */}
      <div className="fixed bottom-8 right-8 z-50">
        {!isChatOpen ? (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-brand-green text-brand-dark p-4 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
          >
            <span className="animate-pulse w-3 h-3 bg-white rounded-full"></span>
            Fale com o Flakes
          </button>
        ) : (
          <div className="bg-brand-dark/95 backdrop-blur-md border border-brand-purple/20 rounded-2xl w-80 shadow-2xl">
            {/* Header */}
            <div className="p-4 border-b border-brand-purple/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={flakesImage}
                  alt="Flakes Power"
                  className="w-10 h-10 rounded-full border-2 border-brand-green"
                />
                <div>
                  <h4 className="font-bold text-sm">Flakes Power</h4>
                  <p className="text-xs text-green-400">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            {/* Messages */}
            <div className="p-4 h-80 overflow-y-auto space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className="flex gap-3">
                  {msg.isAdmin && (
                    <img
                      src={flakesImage}
                      alt={msg.name}
                      className="w-8 h-8 rounded-full border border-brand-green"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-brand-green">{msg.name}</span>
                      <span className="text-xs text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-sm text-gray-200">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-brand-purple/20">
              <div className="flex gap-2 items-center bg-brand-purple/10 rounded-xl p-2">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="bg-transparent flex-1 text-sm focus:outline-none text-white"
                  disabled
                />
                <button className="text-brand-green hover:text-brand-green/80 disabled:opacity-50" disabled>
                  Enviar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;