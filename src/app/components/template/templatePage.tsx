import { Header } from "@/app/components/template/header";
import { cn } from "@/data/utils/cn";

export type TemplatePageProps = {
  children: React.ReactNode;
  className?: string;
};

export function TemplatePage({ children, className }: TemplatePageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-900">
      <Header />
      <main
        className={cn(
          "px-8 max-sm:px-10 mx-auto w-full flex-1 py-10 sm:w-full xl:w-[1200px]",
          className,
        )}
      >
        {children}
      </main>
    </div>
  );
}
