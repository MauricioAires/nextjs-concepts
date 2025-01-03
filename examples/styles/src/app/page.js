import { Header } from "@/components/Header";
import S from "./page.module.css";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Meu título</h1>

        <h2 className={S.heading_module}>Meu CSS Modules</h2>

        <div className={S.container}>
          <p>Testando CSS modules</p>
        </div>

        <div className={S.container}>
          <h3>Teste</h3>
        </div>

        <Header />

        <Container />
      </main>
    </div>
  );
}
