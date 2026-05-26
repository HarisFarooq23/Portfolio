import React from 'react';
import { HeroFallback } from './HeroFallback';

interface State {
  hasError: boolean;
}

export class HeroErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <HeroFallback />;
    }
    return this.props.children;
  }
}
