import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, type Product } from "@/lib/site-data";

export type CartLine = { product: Product; variant: string; qty: number };

type CartApi = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (product: Product, variant?: string, qty?: number) => void;
  setQty: (id: string, variant: string, qty: number) => void;
  remove: (id: string, variant: string) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  recommended: Product[];
};

const CartContext = createContext<CartApi | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((product: Product, variant?: string, qty = 1) => {
    const v = variant ?? product.variants[0];
    setLines((prev) => {
      const found = prev.find((l) => l.product.id === product.id && l.variant === v);
      if (found) {
        return prev.map((l) => (l === found ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { product, variant: v, qty }];
    });
    setOpen(true);
  }, []);

  const setQty = useCallback((id: string, variant: string, qty: number) => {
    setLines((prev) =>
      prev.flatMap((l) =>
        l.product.id === id && l.variant === variant
          ? qty <= 0
            ? []
            : [{ ...l, qty }]
          : [l],
      ),
    );
  }, []);

  const remove = useCallback((id: string, variant: string) => {
    setLines((prev) => prev.filter((l) => !(l.product.id === id && l.variant === variant)));
  }, []);

  const value = useMemo<CartApi>(() => {
    const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
    const inCart = new Set(lines.map((l) => l.product.id));
    return {
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      subtotal,
      add,
      setQty,
      remove,
      open,
      setOpen,
      recommended: products.filter((p) => !inCart.has(p.id)).slice(0, 2),
    };
  }, [lines, open, add, setQty, remove]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
