import Header from "./_components/header/Header";
import MainCarousel from "./_components/carousel/MainCarousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <MainCarousel />
    </main>
  );
}
