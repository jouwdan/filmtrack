import Navbar from '../components/layout/guestNavbar';
import { MemoryRouter } from "react-router";

export default {
    title: "Navigation",
    component: Navbar,
    decorators: [
      (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    ],
  };
  
  export const Guest = () => <Navbar />;