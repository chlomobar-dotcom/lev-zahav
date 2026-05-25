import {
  HeartHandshake,
  ShoppingBasket,
  Package,
  Truck,
  FileText,
  Coffee,
  HandHeart,
  Heart,
  Circle,
} from "lucide-react";

// Associe un nom (utilisé dans content.js) à une icône lucide-react.
const map = {
  HeartHandshake,
  ShoppingBasket,
  Package,
  Truck,
  FileText,
  Coffee,
  HandHeart,
  Heart,
};

export default function Icon({ name, ...props }) {
  const Cmp = map[name] || Circle;
  return <Cmp {...props} />;
}
