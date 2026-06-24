'use client'

import { Button } from "@/components/ui/button"

type Props = {
  name: string;
  price: number;
  stock?: number;
  onAddToCart: (name: string) => void;
}

export default function AppProductCard({ name, price, stock = 0, onAddToCart }: Props) {
  return (
    <div className="w-60 border border-border rounded-md bg-card p-5">
      <div className="aspect-square rounded-sm bg-muted mb-4" />
      <h3 className="font-heading text-[18px] font-semibold leading-[1.3] text-foreground">
        {name}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        ราคา: {price} บาท
      </p>
      {
        stock > 0 && (
          <div className="mt-3">
            <p className="text-xs text-muted-foreground mb-2">
              คงเหลือ: {stock}
            </p>
            <Button size="sm" onClick={() => onAddToCart(name)}>
              เพิ่มลงตะกร้า
            </Button>
          </div>
        )
      }
    </div>
  );
}
