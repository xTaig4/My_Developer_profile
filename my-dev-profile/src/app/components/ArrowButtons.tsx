import { useState } from "react";

interface ArrowProps {
  collection: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  classNameLeft?: string;
  classNameRight?: string;
}

const ArrowButtons = ({
  collection,
  currentIndex,
  onIndexChange,
  classNameLeft,
  classNameRight,
}: ArrowProps) => {
  const [index, setIndex] = useState(0);

  const handleLeftArrow = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : collection.length - 1;
    onIndexChange(newIndex);
  };

  const handleRightArrow = () => {
    const newIndex =
      currentIndex < collection.length - 1 ? currentIndex + 1 : 0;
    onIndexChange(newIndex);
  };

  return (
    <div className="flex flex-row">
      <button
        onClick={handleLeftArrow}
        className={`z-1 flex h-7 w-10 items-center justify-center border-1 p-1 text-3xl hover:bg-gray-600 ${classNameLeft}`}
      >
        ←
      </button>
      <button
        onClick={handleRightArrow}
        className={`z-1 flex h-7 w-10 items-center justify-center border-1 p-1 text-3xl hover:bg-gray-600 ${classNameRight}`}
      >
        →
      </button>
    </div>
  );
};

export default ArrowButtons;
