# Gace

Gace is a decentralized payment streaming and token distribution frontend built on the [Stellar](https://stellar.org) blockchain. It lets users create payment streams, run token distributions, manage balances, and track transaction history — all through a non-custodial wallet interface.

## Features

- **Payment Streams** — create, pause, cancel, and withdraw from time-based payment streams
- **Token Distribution** — batch-distribute tokens to multiple recipients in a single transaction
- **Dashboard** — overview of active streams and account activity
- **Balances** — view Stellar account token balances
- **History** — full transaction and stream history
- **Off-ramp** — off-ramp flows for converting tokens
- **Contract Deployment** — deploy Soroban smart contracts directly from the UI
- **Wallet Integration** — connect via Freighter and other Stellar wallets

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [@stellar/stellar-sdk](https://github.com/stellar/js-stellar-sdk)
- [TanStack Query](https://tanstack.com/query)
- [Radix UI](https://www.radix-ui.com)
- [Framer Motion](https://www.framer.com/motion)
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)
- [Vitest](https://vitest.dev) + [Playwright](https://playwright.dev)

## Prerequisites

- [Node.js](https://nodejs.org) >= 20
- [pnpm](https://pnpm.io) >= 9
- A Stellar wallet (e.g. [Freighter](https://www.freighter.app))
- The `stellar_client_core` repo cloned as a sibling directory (provides the SDK)

## Getting Started

### 1. Clone both repos as siblings

```bash
git clone https://github.com/nehmaya7/gace.git
git clone https://github.com/nehmaya7/stellar_client_core.git
```

Your directory layout should look like this:

```
~/
├── gace/
└── stellar_client_core/
```

### 2. Install dependencies

```bash
cd gace
pnpm install
```

### 3. Configure environment

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in the required values:

```env
# Required — get contract IDs from stellar_client_core/deployments/testnet.json
NEXT_PUBLIC_PAYMENT_STREAM_CONTRACT_ID=C...
NEXT_PUBLIC_DISTRIBUTOR_CONTRACT_ID=C...

# Network
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org
NEXT_PUBLIC_NETWORK_PASSPHRASE=Test SDF Network ; September 2015
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start the development server with Turbopack |
| `pnpm build` | Build for production |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run unit tests with Vitest |
| `pnpm test:e2e` | Run end-to-end tests with Playwright |

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── (overview)/       # Main app routes
│   │   ├── dashboard/    # Dashboard page
│   │   ├── payment-stream/
│   │   ├── distribution/
│   │   ├── history/
│   │   ├── offramp/
│   │   └── deploy-contract/
│   ├── api/              # API routes (GraphQL, webhooks, streams)
│   └── balances/
├── components/           # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Core API and utility functions
├── providers/            # React context providers
├── services/             # Stellar service layer
├── store/                # Global state
├── types/                # TypeScript types
└── utils/                # Helper utilities
```

## Environment Variables

See `.env.example` for the full list. The required variables are:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_PAYMENT_STREAM_CONTRACT_ID` | Deployed payment stream contract address |
| `NEXT_PUBLIC_DISTRIBUTOR_CONTRACT_ID` | Deployed distributor contract address |
| `NEXT_PUBLIC_STELLAR_NETWORK` | `testnet` or `mainnet` |
| `NEXT_PUBLIC_SOROBAN_RPC_URL` | Soroban RPC endpoint |
| `NEXT_PUBLIC_NETWORK_PASSPHRASE` | Stellar network passphrase |

## Related

- [stellar_client_core](https://github.com/nehmaya7/stellar_client_core) — Soroban smart contracts and TypeScript SDK

## License

MIT
