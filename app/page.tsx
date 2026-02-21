'use client';

import Link from 'next/link';
import { RevolverCylinder } from '@/components/revolver-cylinder';
import { useState } from 'react';

export default function Home() {
  const [selectedChamber, setSelectedChamber] = useState(0);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-card to-background py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                  🤠 Welcome to the Saloon
                </p>
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
                  Magic <span className="text-primary">Roulette</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  High-stakes Russian Roulette on Solana. Spin the cylinder, test your nerve, claim your glory.
                </p>
              </div>

              {/* Game Modes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <Link
                  href="/play/1v1"
                  className="group p-6 rounded-lg border border-primary/20 hover:border-primary bg-card hover:bg-muted transition-all"
                >
                  <h3 className="font-bold text-lg text-foreground mb-2">1v1 Duel</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Head-to-head high-stakes competition
                  </p>
                  <span className="inline-block text-primary group-hover:translate-x-1 transition-transform">
                    Play Now →
                  </span>
                </Link>

                <Link
                  href="/play/2v2"
                  className="group p-6 rounded-lg border border-accent/20 hover:border-accent bg-card hover:bg-muted transition-all"
                >
                  <h3 className="font-bold text-lg text-foreground mb-2">2v2 Team</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Squad-based gameplay and team rankings
                  </p>
                  <span className="inline-block text-accent group-hover:translate-x-1 transition-transform">
                    Play Now →
                  </span>
                </Link>
              </div>

              {/* CTA Button */}
              <div>
                <button className="gun-metal-button w-full sm:w-auto">
                  Connect Wallet to Play
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-bold text-primary">$2.4M</p>
                  <p className="text-sm text-muted-foreground">Total Pot</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">12.5K+</p>
                  <p className="text-sm text-muted-foreground">Active Players</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">48h</p>
                  <p className="text-sm text-muted-foreground">Season Ends</p>
                </div>
              </div>
            </div>

            {/* Right - Revolver Animation */}
            <div className="hidden lg:flex items-center justify-center">
              <RevolverCylinder
                selectedChamber={selectedChamber}
                onSpinComplete={() => {
                  setSelectedChamber((prev) => (prev + 1) % 6);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Why Play Magic Roulette?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Real Stakes',
                description: 'Win SOL and tokens with every successful chamber selection. True risk, true reward.',
                icon: '💰',
              },
              {
                title: 'Global Leaderboard',
                description: 'Compete against players worldwide. Earn badges and claim your rank as a legendary outlaw.',
                icon: '🏆',
              },
              {
                title: 'Fair & Transparent',
                description: 'Built on Solana blockchain. Verifiable outcomes, zero house manipulation.',
                icon: '⚡',
              },
              {
                title: 'Instant Settlements',
                description: 'Winnings claimed instantly to your wallet. No waiting, no middlemen.',
                icon: '✨',
              },
              {
                title: 'Team Play',
                description: '2v2 team battles for squad-based strategy and competitive team rankings.',
                icon: '👥',
              },
              {
                title: 'Reward Pool',
                description: 'Weekly prize distributions. Climb the ranks and unlock exclusive rewards.',
                icon: '🎁',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border bg-card hover:bg-muted transition-colors group"
              >
                <p className="text-4xl mb-4">{feature.icon}</p>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Winners Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Recent Legends
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { rank: '🥇 1st', player: 'SheriffSolana', winnings: '52.3 SOL', streak: '8 wins' },
              { rank: '🥈 2nd', player: 'OutlawWinston', winnings: '48.7 SOL', streak: '6 wins' },
              { rank: '🥉 3rd', player: 'RevolverRick', winnings: '45.2 SOL', streak: '5 wins' },
              { rank: '#4', player: 'SaloonSally', winnings: '42.8 SOL', streak: '4 wins' },
            ].map((winner, i) => (
              <div
                key={i}
                className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors group"
              >
                <p className="text-xl font-bold text-primary mb-2">{winner.rank}</p>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {winner.player}
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Winnings: <span className="text-primary font-semibold">{winner.winnings}</span></p>
                  <p>Streak: <span className="text-accent font-semibold">{winner.streak}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Test Your Nerve?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of players competing for glory and fortune on the Solana blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gun-metal-button">
              Connect Wallet
            </button>
            <Link
              href="/how-it-works"
              className="px-6 py-3 rounded border border-primary text-primary hover:bg-primary/10 transition-colors font-semibold"
            >
              Learn How to Play
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
