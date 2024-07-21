import { useContext } from "react";
import ContextCart from "@/data/contexts/contextCart";

export const useCart = () => useContext(ContextCart);
