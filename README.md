This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

ecommerce-nextjs/
│── public/                    # Arquivos estáticos (imagens, ícones, fontes, etc.)
│── src/
│   ├── app/                   # Diretório de rotas (caso use App Router - Next.js 13+)
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página inicial
│   │   ├── (auth)/            # Grupo de rotas para autenticação
│   │   │   ├── login/page.tsx
│   │   │   ├── register/page.tsx
│   │   ├── (shop)/            # Grupo de rotas da loja
│   │   │   ├── products/page.tsx  # Página de listagem de produtos
│   │   │   ├── product/[id]/page.tsx  # Página de detalhes do produto
│   │   ├── (user)/            # Rotas relacionadas ao usuário
│   │   │   ├── profile/page.tsx
│   │   │   ├── orders/page.tsx
│   │   ├── (cart)/            # Carrinho de compras
│   │   │   ├── page.tsx
│   ├── components/            # Componentes reutilizáveis
│   │   ├── ui/                # Componentes de UI (botões, inputs, modais, etc.)
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   ├── layout/            # Layouts e headers
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   ├── cart/              # Componentes do carrinho
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   ├── product/           # Componentes de produto
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGallery.tsx
│   ├── hooks/                 # Hooks customizados
│   │   ├── useCart.ts
│   │   ├── useAuth.ts
│   ├── services/              # Comunicação com API
│   │   ├── api.ts             # Configuração do axios ou fetch
│   │   ├── productService.ts  # Funções para obter produtos
│   │   ├── authService.ts     # Funções para login, logout, etc.
│   ├── context/               # Context API (carrinho, tema, autenticação)
│   │   ├── CartContext.tsx
│   │   ├── AuthContext.tsx
│   ├── store/                 # Gerenciamento de estado Zustand
│   │   ├── cartStore.ts
│   │   ├── userStore.ts
│   ├── lib/                   # Utilitários globais
│   │   ├── formatCurrency.ts  # Função para formatar preços
│   │   ├── dateUtils.ts       # Funções para manipular datas
│   ├── styles/                # Arquivos de estilos globais
│   │   ├── globals.css
│   ├── types/                 # Tipos TypeScript
│   │   ├── product.ts
│   │   ├── user.ts
│   ├── middleware.ts          # Middleware para autenticação, redirecionamento
│   ├── env.mjs                # Configuração de variáveis de ambiente (com Zod)
│── .env                       # Variáveis de ambiente
│── next.config.js             # Configurações do Next.js
│── package.json               # Dependências do projeto
│── tsconfig.json              # Configuração do TypeScript
