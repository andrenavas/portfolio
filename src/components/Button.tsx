import './Button.css'
import { useNavigate } from 'react-router-dom'

interface ButtonProps {
  linkTo?: string;
  descriptionButton: string;
}

const Button: React.FC<ButtonProps> = ({ linkTo, descriptionButton }) => {

  const navigateTo = useNavigate();
  const navigateToLink = () => {
    if (linkTo) {
      navigateTo(linkTo);
    }
  }

  return (
    <div>
      <button className='btn fill' onClick={navigateToLink}>{descriptionButton}</button>
    </div>
  )
}

export default Button;