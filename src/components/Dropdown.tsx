import { useState, useEffect } from "react";

const Dropdown = ({
  options,
  onSelect,
  brecha,
}: {
  options: string[];
  onSelect: (option: string) => void;
  brecha: string | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOption(brecha);
  }, [brecha]);

  return (
    <div className="absolut inline-block text-left">
      <div>
        <button
          onClick={handleToggle}
          className="w-80 h-12 inline-flex justify-between items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none"
        >
          {brecha || selectedOption || "Escribe..."}
          <img src="/assets/images/search.svg" alt="buscar" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right right-0 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="block px-4 py-2 text-sm text-gray-500 bg-[#f7f7f7] hover:bg-buttonColor hover:text-white w-full text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
