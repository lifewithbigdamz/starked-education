import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('handles value changes', async () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'test value');
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies variant classes correctly', () => {
    render(<Input variant="filled" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-2');
  });

  it('applies size classes correctly', () => {
    render(<Input size="lg" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('h-12');
  });

  it('shows error state', () => {
    render(<Input error helperText="Error message" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-semantic-error-500');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<Input label="Required Field" required />);
    const label = screen.getByText('Required Field');
    expect(label).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders with left element', () => {
    render(
      <Input 
        leftElement={<span data-testid="left-icon">🔍</span>}
        placeholder="Search"
      />
    );
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('renders with right element', () => {
    render(
      <Input 
        rightElement={<span data-testid="right-icon">✓</span>}
        placeholder="Validate"
      />
    );
    
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('cursor-not-allowed');
  });

  it('has proper accessibility attributes', () => {
    render(
      <Input 
        aria-describedby="input-help"
        aria-invalid={true}
      />
    );
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'input-help');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('generates unique ID when not provided', () => {
    render(<Input label="Test Input" />);
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Test Input');
    
    expect(input).toHaveAttribute('id');
    expect(label).toHaveAttribute('for', input.id);
  });

  it('uses provided ID', () => {
    render(<Input id="custom-id" label="Test Input" />);
    const input = screen.getByRole('textbox');
    const label = screen.getByText('Test Input');
    
    expect(input).toHaveAttribute('id', 'custom-id');
    expect(label).toHaveAttribute('for', 'custom-id');
  });

  it('supports keyboard navigation', async () => {
    const handleKeyDown = jest.fn();
    render(<Input onKeyDown={handleKeyDown} />);
    
    const input = screen.getByRole('textbox');
    input.focus();
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(handleKeyDown).toHaveBeenCalled();
  });

  it('handles focus events', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    
    render(<Input onFocus={handleFocus} onBlur={handleBlur} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.blur(input);
    
    expect(handleFocus).toHaveBeenCalled();
    expect(handleBlur).toHaveBeenCalled();
  });

  it('renders different input types', () => {
    render(<Input type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });
});
