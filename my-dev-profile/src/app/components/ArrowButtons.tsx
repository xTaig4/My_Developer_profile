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
    <div className="flex flex-row gap-px">
      <button
        type="button"
        onClick={handleLeftArrow}
        aria-label="Previous"
        className={`btn btn--icon z-1 ${classNameLeft ?? ""}`}
      >
        {"<"}
      </button>
      <button
        type="button"
        onClick={handleRightArrow}
        aria-label="Next"
        className={`btn btn--icon z-1 ${classNameRight ?? ""}`}
      >
        {">"}
      </button>
    </div>
  );
};

export default ArrowButtons;
