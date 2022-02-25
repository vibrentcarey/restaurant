import { render, screen } from '@testing-library/react';
import MenuItem from '../components/Meals/MenuItem';

const menuItem = {
  id: 1,
  description: 'Caesar Salad made with lettuce, cucumbers, and croutons.'
}

test('menu item shows correct description', () => {
  render(<MenuItem menuItem={menuItem} />)
  const description = screen.getByTestId('description').textContent
  expect(description).toBe('Caesar Salad made with lettuce, cucumbers, and croutons.')

})
