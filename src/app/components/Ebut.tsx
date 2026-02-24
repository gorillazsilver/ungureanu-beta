import React from "react";

type EmblaCarouselDotButtonProps = {
  selected: boolean;
  onClick: () => void;
};

const EmblaCarouselDotButton: React.FC<EmblaCarouselDotButtonProps> = ({
  selected,
  onClick,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    aria-label="Select slide"
  />
);

export default EmblaCarouselDotButton;
