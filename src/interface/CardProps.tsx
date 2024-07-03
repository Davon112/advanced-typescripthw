import React, {ReactNode} from "react";

interface CardProps{
    children: ReactNode;
}
const Card: React.FC<CardProps> = ({ children }: CardProps) => {
    return (
        <div className="card">
            {children}
        </div>
    );
  };
  
  export default Card;