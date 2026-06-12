import { 
  RubyIcon, RailsIcon, GoogleIcon, CsvIcon, TypeScriptIcon, NodeJsIcon, NestJSIcon, ReactIcon, RedisIcon, 
  PostgreSQLIcon, PrismaIcon, JWTIcon, NextJSIcon, DotNetIcon
} from '../components/icons'

const TAGS = {
  RUBY: {
    name: "Ruby",
    class: "bg-red-500/80 text-white",
    icon: RubyIcon
  },
  RAILS: {
    name: "Ruby on Rails",
    class: "bg-sky-100/40 text-white",
    icon: RailsIcon
  },
  GOOGLE_CIVIC_INFORMATION_API: {
    name: "Google Civic API",
    class: "bg-blue-500/80 text-white",
    icon: GoogleIcon
  },
  CSV: {
    name: "CSV",
    class: "bg-green-500/80 text-white",
    icon: CsvIcon
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-blue-600/80 text-white",
    icon: TypeScriptIcon
  },
  NODEJS: {
    name: "Node.js",
    class: "bg-green-700/80 text-white",
    icon: NodeJsIcon
  },
  NESTJS: {
    name: "NestJS",
    class: "bg-rose-700/80 text-white",
    icon: NestJSIcon
  },
  REACT: {
    name: "React",
    class: "bg-cyan-600/80 text-white",
    icon: ReactIcon
  },
  REDIS: {
    name: "Redis",
    class: "bg-red-600/80 text-white",
    icon: RedisIcon
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    class: "bg-indigo-600/80 text-white",
    icon: PostgreSQLIcon
  },
  PRISMA: {
    name: "Prisma",
    class: "bg-slate-600/80 text-white",
    icon: PrismaIcon
  },
  JWT: {
    name: "JWT",
    class: "bg-pink-700/80 text-white",
    icon: JWTIcon
  },
  NEXTJS: {
    name: "Next.js",
    class: "bg-black/80 text-white",
    icon: NextJSIcon
  },
  DOTNET: {
    name: "Dotnet",
    class: "bg-slate-700/80 text-white",
    icon: DotNetIcon
  }
}

export const PROJECTS = {
  en: [
    {
      title: "Tracli — Developer Time Tracking Ecosystem",
      description: "An enterprise-grade, offline-first CLI tooling suite engineered for frictionless developer workflows. Built following Domain-Driven Design (DDD) and Clean Architecture across four strictly decoupled layers (Domain, Application, Infrastructure, and Interface). Features a secure Express REST API backend for automated cloud synchronization and a polished React/Tailwind analytics dashboard. Distributed and published as a modular package via GitHub Packages.",
      github: "https://github.com/Sandotech/tracli-cli",
      image: "/projects/tracli.png",
      tags: [TAGS.TYPESCRIPT, TAGS.NODEJS, TAGS.REACT],
    },
    {
      title: "BlockBeat — Cryptocurrency Real-Time Tracker",
      description: "A high-performance cryptocurrency tracking platform built with .NET 8 and React. Engineered to seamlessly ingest, process, and map real-time market data directly via the CoinCap API. Implements optimized responsive historical data charts and an efficient data-mapping layer to guarantee smooth, low-latency UI rendering under frequent state updates.",
      github: "https://github.com/Sandotech/blockbeat-api",
      image: "/projects/blockbeat.png",
      tags: [TAGS.DOTNET, TAGS.REACT, TAGS.TYPESCRIPT],
    },
    {
      title: "Feature Flag Platform — Low-Latency Monorepo",
      description: "A production-ready feature flag ecosystem architected as a monorepo, pairing a robust REST API (Express + Prisma + MySQL) with a custom, zero-dependency TypeScript SDK. Implements a Redis caching layer for ultra-low latency environment-scoped flag lookups (dev/qa/prod), guaranteeing sub-millisecond execution times (`isEnabled()`, `getFlag()`) ready to be dropped into distributed Node.js microservices.",
      github: "https://github.com/Sandotech/feature-flag",
      image: "/projects/feature-flag.png",
      tags: [TAGS.TYPESCRIPT, TAGS.NODEJS, TAGS.PRISMA, TAGS.REDIS, TAGS.NEXTJS],
    },
  ],
  es: [
    {
      title: "Tracli — Ecosistema de Rastreo de Tiempo para Desarrolladores",
      description: "Una suite de herramientas CLI con enfoque offline-first diseñada para optimizar flujos de trabajo de desarrollo. Construida bajo los principios de Domain-Driven Design (DDD) y Arquitectura Limpia en cuatro capas desacopladas (Dominio, Aplicación, Infraestructura e Interfaz). Cuenta con un backend API REST en Express para sincronización automatizada en la nube y un dashboard analítico en React/Tailwind. Publicado y distribuido como un paquete modular en GitHub Packages.",
      github: "https://github.com/Sandotech/tracli-cli",
      image: "/projects/tracli.png",
      tags: [TAGS.TYPESCRIPT, TAGS.NODEJS, TAGS.REACT],
    },
    {
      title: "BlockBeat — Rastreador de Criptomonedas en Tiempo Real",
      description: "Plataforma de alto rendimiento para el seguimiento de criptomonedas construida con .NET 8 y React. Diseñada para la ingesta, procesamiento y mapeo eficiente de datos de mercado en tiempo real consumidos directamente desde la API de CoinCap. Implementa gráficos históricos optimizados y una capa de manejo de estado fluida para garantizar un renderizado de UI de baja latencia ante actualizaciones frecuentes de datos.",
      github: "https://github.com/Sandotech/blockbeat-api",
      image: "/projects/blockbeat.png",
      tags: [TAGS.DOTNET, TAGS.REACT, TAGS.TYPESCRIPT],
    },
    {
      title: "Feature Flag Platform — Monorepo de Baja Latencia",
      description: "Ecosistema de feature flags listo para producción estructurado como un monorepo, que conecta una API REST robusta (Express + Prisma + MySQL) con un SDK de TypeScript personalizado y cero dependencias externas. Implementa una capa de caché con Redis para consultas de flags segmentadas por entorno (dev/qa/prod) con ultra baja latencia, garantizando ejecuciones en submilisegundos (`isEnabled()`, `getFlag()`) listas para integrarse en microservicios distribuidos de Node.js.",
      github: "https://github.com/Sandotech/feature-flag",
      image: "/projects/feature-flag.png",
      tags: [TAGS.TYPESCRIPT, TAGS.NODEJS, TAGS.PRISMA, TAGS.REDIS, TAGS.NEXTJS],
    },
  ]
};