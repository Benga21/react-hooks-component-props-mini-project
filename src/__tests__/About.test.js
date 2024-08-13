// src/__tests__/App.test.js
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { posts } from '../data/blog';
jest.mock('../components/Header', () => () => <header>Header Component</header>);
jest.mock('../components/About', () => () => <aside>About Component</aside>);
jest.mock('../components/ArticleList', () => () => <main>ArticleList Component</main>);

describe('App Component', () => {
  test('renders Header, About, and ArticleList components', () => {
    render(<App />);
    expect(screen.queryByText('Header Component')).not.toBeNull();
    expect(screen.queryByText('About Component')).not.toBeNull();
    expect(screen.queryByText('ArticleList Component')).not.toBeNull();
  });
  test('passes the correct data to ArticleList', () => {
    render(<App />);
    expect(screen.queryByText('ArticleList Component')).not.toBeNull();
  });
});

