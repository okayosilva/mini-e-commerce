import { TemplatePage } from "@/app/components/template/templatePage";
import produtos from "@/data/constants/produtos";
import { CardProduct } from "../components/product/cardProduct";

export default function Home() {
  return (
    <TemplatePage>
      <div className="flex flex-wrap justify-center gap-5">
        {produtos.map((produto) => (
          <CardProduct product={produto} key={produto.id} />
        ))}
      </div>
    </TemplatePage>
  );
}
