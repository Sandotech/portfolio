import { 
  RubyIcon, RailsIcon, GoogleIcon, CsvIcon, TypeScriptIcon, NodeJsIcon, NestJSIcon, ReactIcon, RedisIcon, 
  PostgreSQLIcon, PrismaIcon, JWTIcon, NextJSIcon 
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
}

export const PROJECTS = {
  en: [
    {
      title: "Tracli — Developer Time Tracking Ecosystem",
      description: "Full-stack developer tooling suite: a terminal-first CLI (Commander.js, offline-first, DDD) for frictionless work logging, an Express REST API backend for cloud sync, and a React + Tailwind landing page. The CLI is published to GitHub Packages and follows clean architecture with domain, application, infrastructure, and interface layers.",
      github: "https://github.com/Sandotech/tracli-cli",
      image: "/projects/tracli.png",
      tags: [TAGS.TYPESCRIPT, TAGS.NODEJS, TAGS.REACT],
    },
    {
      title: "Feature Flag Platform",
      description: "End-to-end feature flag system built as a monorepo: a REST API (Express + Prisma + MySQL + Redis) paired with a zero-dependency TypeScript SDK. Supports environment-scoped flags (dev/qa/prod), Redis caching for low-latency lookups, and a clean SDK API — isEnabled(), getFlag(), listFlags() — ready to drop into any Node.js project.",
      github: "https://github.com/Sandotech/feature-flag",
      image: "/projects/feature-flag.png",
      tags: [TAGS.TYPESCRIPT, TAGS.NODEJS, TAGS.PRISMA, TAGS.REDIS, TAGS.NEXTJS],
    },
    {
      title: "Authy — Auth Microservice",
      description: "Production-ready authentication microservice built with NestJS and TypeScript. Implements JWT + Passport.js for stateless auth, TypeORM with PostgreSQL for user persistence, and full unit/e2e test coverage. Dockerized for local development with a docker-compose Postgres setup.",
      github: "https://github.com/Sandotech/authy",
      image: "/projects/authy.png",
      tags: [TAGS.TYPESCRIPT, TAGS.NESTJS, TAGS.POSTGRESQL, TAGS.JWT],
    },
  ],
  es: [
    {
      title: "Tracli — Ecosistema de Rastreo de Tiempo para Desarrolladores",
      description: "Suite de herramientas para desarrolladores full-stack: una CLI terminal-first (Commander.js, offline-first, DDD) para registro de trabajo sin fricción, un backend API REST con Express para sincronización en la nube, y una landing page en React + Tailwind. La CLI está publicada en GitHub Packages y sigue una arquitectura limpia con capas de dominio, aplicación, infraestructura e interfaz.",
      github: "https://github.com/Sandotech/tracli-cli",
      image: "/projects/tracli.png",
      tags: [TAGS.TYPESCRIPT, TAGS.NODEJS, TAGS.REACT],
    },
    {
      title: "Plataforma de Feature Flags",
      description: "Sistema de feature flags end-to-end construido como un monorepo: una API REST (Express + Prisma + MySQL + Redis) junto con un SDK de TypeScript sin dependencias. Soporta flags por entorno (dev/qa/prod), caché de Redis para búsquedas de baja latencia, y una API limpia en el SDK — isEnabled(), getFlag(), listFlags() — lista para usar en cualquier proyecto Node.js.",
      github: "https://github.com/Sandotech/feature-flag",
      image: "/projects/feature-flag.png",
      tags: [TAGS.TYPESCRIPT, TAGS.NODEJS, TAGS.PRISMA, TAGS.REDIS, TAGS.NEXTJS],
    },
    {
      title: "Authy — Microservicio de Autenticación",
      description: "Microservicio de autenticación listo para producción construido con NestJS y TypeScript. Implementa JWT + Passport.js para autenticación sin estado, TypeORM con PostgreSQL para persistencia de usuarios, y cobertura completa de pruebas unitarias/e2e. Dockerizado para desarrollo local con una configuración de Postgres en docker-compose.",
      github: "https://github.com/Sandotech/authy",
      image: "/projects/authy.png",
      tags: [TAGS.TYPESCRIPT, TAGS.NESTJS, TAGS.POSTGRESQL, TAGS.JWT],
    },
  ]
};
