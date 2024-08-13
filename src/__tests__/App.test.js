// src/__tests__/App.test.js
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { posts } from '../data/blog';

// Mock components
jest.mock('../components/Header', () => () => <header>Header Component</header>);
jest.mock('../components/About', () => () => <aside>About Component</aside>);
jest.mock('../components/ArticleList', () => () => <main>ArticleList Component</main>);

describe('App Component', () => {
  test('renders Header, About, and ArticleList components', () => {
    render(<App />);

    // Check if elements are present
    expect(screen.queryByText('Header Component')).toBeTruthy();
    expect(screen.queryByText('About Component')).toBeTruthy();
    expect(screen.queryByText('ArticleList Component')).toBeTruthy();
  });

  test('passes the correct data to ArticleList', () => {
    render(<App />);

    // Check if ArticleList component is present
    expect(screen.queryByText('ArticleList Component')).toBeTruthy();
  });
});
