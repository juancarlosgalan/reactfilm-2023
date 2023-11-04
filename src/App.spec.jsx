import { render, screen } from '@testing-library/react';

import App from './App';
import { describe, it } from 'vitest';

describe('App', () => {
  it('should render component', () => {
    const component = render(<App />);

    const title = component.getByText
    ("ESTO NO ESTA");

    expect(title).toBe("assddff");
    //expect(component).toBeDefined();

  });


    // check if App components renders headline

});