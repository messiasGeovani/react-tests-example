import { Dropdown } from ".";

import { screen, render, userEvent } from "../../../tests";

const title = "Selecione o personagem";
const options = ["Tiringa", "Galo Sego", "Reptile Churrasqueiro"];

describe("<Dropdown />", () => {
  it("should start closed", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  it("should show options when open", () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    const dropdownButton = screen.getByRole("button", { name: title });

    userEvent.click(dropdownButton);

    expect(
      screen.getByRole("menuitem", { name: options[0] })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("menuitem", { name: options[1] })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("menuitem", { name: options[2] })
    ).toBeInTheDocument();
  });

  it("should signal an option was selected and close the dropdown", () => {
    const onSelect = jest.fn();

    render(<Dropdown title={title} options={options} onSelect={onSelect} />);

    const dropdownButton = screen.getByRole("button", { name: title });

    userEvent.click(dropdownButton);

    const dropdownItem = screen.getByRole("menuitem", { name: options[1] });

    userEvent.click(dropdownItem);

    expect(onSelect).toHaveBeenCalledWith(options[1]);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });
});
