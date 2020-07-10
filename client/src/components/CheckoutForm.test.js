import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const formHeader = screen.getByText(/checkout form/i);
    
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    const fNameInput = screen.getByLabelText(/first name/i)
    const lNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    const submitButton = screen.getByTestId('submitButton');

    fireEvent.change(fNameInput, { target: { value: 'Christian' } });
    fireEvent.change(lNameInput, { target: { value: 'Arneson' } });
    fireEvent.change(addressInput, { target: { value: '1234 Fake St' } });
    fireEvent.change(cityInput, { target: { value: 'Golden' } });
    fireEvent.change(stateInput, { target: { value: 'CO' } });
    fireEvent.change(zipInput, { target: { value: '80403' } });

    fireEvent.click(submitButton);

    const successMessage = await screen.findByTestId('successMessage');
    
    expect(successMessage).toBeInTheDocument();
    expect(successMessage.textContent.toLowerCase()).toContain('you have ordered some plants!');
    expect(successMessage.textContent.toLowerCase()).toContain('your new green friends will be shipped to:');
    expect(successMessage.textContent.toLowerCase()).toContain('christian arneson');
    expect(successMessage.textContent.toLowerCase()).toContain('1234 fake st');
    expect(successMessage.textContent.toLowerCase()).toContain('golden, co 80403');
});
