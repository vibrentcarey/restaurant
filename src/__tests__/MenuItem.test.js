import { render, screen } from '@testing-library/react';
import MenuItem from '../components/Meals/MenuItem';
import Menu from '../components/Meals/Menu'

const menuItem = {
  id: 1,
  name: 'Salad',
  description: 'Caesar Salad made with lettuce, cucumbers, and croutons.',
}

test('menu item shows correct title', () => {
  render(<MenuItem menuItem={menuItem} />)
  const title = screen.getByRole('heading').textContent
  expect(title).toBe('Salad')

})

test('menu item shows correct description', () => {
  render(<MenuItem menuItem={menuItem} />)
  const description = screen.getByTestId('description').textContent
  expect(description).toBe('Caesar Salad made with lettuce, cucumbers, and croutons.')

})

