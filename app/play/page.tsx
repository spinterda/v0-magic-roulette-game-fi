'use client';

import Link from 'next/link';
import { ArrowRight, Users, Zap } from 'lucide-react';

export default function PlayPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Challenge</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your game mode and enter the saloon. Will you face a single opponent or lead your team to victory?
          </p>
        </div>

        {/* Game Modes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* 1v1 Mode */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 rounded-lg border-2 border-primary/50 bg-card hover:bg-muted transition-colors">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">1v1 Duel</h2>
                <p className="text-muted-foreground">
                  Go head-to-head with another player. Pure skill, pure stakes.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Zap size={18} className="text-primary" />
                  <span className="text-sm text-foreground">Instant matchmaking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap size={18} className="text-primary" />
                  <span className="text-sm text-foreground">Best of 3 rounds</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap size={18} className="text-primary" />
                  <span className="text-sm text-foreground">Direct SOL transfers</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-4 rounded bg-background border border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Min Stake
                  </p>
                  <p className="font-bold text-primary">0.5 SOL</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Max Stake
                  </p>
                  <p className="font-bold text-primary">100 SOL</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/play/1v1"
                className="w-full px-6 py-3 rounded bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center justify-center gap-2 transition-all group-hover:gap-3"
              >
                Find Opponent
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* 2v2 Mode */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 rounded-lg border-2 border-accent/50 bg-card hover:bg-muted transition-colors">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">2v2 Team</h2>
                <p className="text-muted-foreground">
                  Team up with friends or be matched with teammates. Strategy meets skill.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-accent" />
                  <span className="text-sm text-foreground">Squad-based matchmaking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-accent" />
                  <span className="text-sm text-foreground">Team rankings & rewards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-accent" />
                  <span className="text-sm text-foreground">Shared prize pool</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-4 rounded bg-background border border-border">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Min Stake
                  </p>
                  <p className="font-bold text-accent">1 SOL</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Max Stake
                  </p>
                  <p className="font-bold text-accent">200 SOL</p>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/play/2v2"
                className="w-full px-6 py-3 rounded bg-accent hover:bg-accent/90 text-accent-foreground font-semibold flex items-center justify-center gap-2 transition-all group-hover:gap-3"
              >
                Form or Join Team
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Rules Section */}
        <div className="max-w-4xl mx-auto p-8 rounded-lg border border-border bg-card">
          <h3 className="text-2xl font-bold text-foreground mb-6">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-3">1</div>
              <h4 className="font-semibold text-foreground mb-2">Place Your Bet</h4>
              <p className="text-sm text-muted-foreground">
                Choose your stake in SOL. The higher the risk, the greater the reward.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-3">2</div>
              <h4 className="font-semibold text-foreground mb-2">Spin & Select</h4>
              <p className="text-sm text-muted-foreground">
                The revolver spins. You select a chamber. Only one is safe.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-3">3</div>
              <h4 className="font-semibold text-foreground mb-2">Claim Your Prize</h4>
              <p className="text-sm text-muted-foreground">
                Win and the SOL transfers instantly to your wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
