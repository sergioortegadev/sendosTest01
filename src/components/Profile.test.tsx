import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Profile from "./Profile"; // Ajusta la ruta según sea necesario

describe(" ♣ TEST Component: <Profile/> ", () => {
  it("renders UserData component with correct user data", () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    const greetingElement = screen.getByText(/Hola, Carlos/i);
    expect(greetingElement).toBeInTheDocument();

    const positionElement = screen.getByText(/Asistente de tienda/i);
    expect(positionElement).toBeInTheDocument();
  });
});
