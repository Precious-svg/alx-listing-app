export interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    onClick: () => void;
  }
  
  export interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
  }