import Header from "./_components/header/Header";
import MainCarousel from "./_components/carousel/MainCarousel";
import MainText from "./_components/typo/MainText";
import ImageSlider from "./_components/carousel/ImageSlider";
import StudioGrid from "./_components/studio/StudioGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <Header />
      <MainCarousel />
      <div className="py-24 flex justify-center items-center flex-col gap-14 text-2xl font-medium tracking-tight">
        <MainText />
        <div className="flex flex-col items-center">
          <p>시안사진관에 오신 것을 환영합니다.</p>
          <p>찾으시는 모든 분들의 모습을 있는 그대로 모두가 만족하고</p>
          <p>
            사랑할 수 있는 사진을 옆에서 항상 같은 모습으로 찍어드리고 있습니다.
          </p>
        </div>
      </div>
      <section className="flex flex-col gap-14 items-center mb-52 w-full">
        <ImageSlider />
        <div className="px-6 py-3 border border-black rounded-[60px]">
          <a href="#" className="font-bold">
            인스타그램에서 더 많은 사진 보기
          </a>
        </div>
      </section>
      <section className="flex flex-col gap-4 items-center">
        <div className="w-full text-left">
          <h2 className="text-[42px] font-bold">시안 스튜디오</h2>
        </div>
        <StudioGrid />
        <button className="w-fit px-10 py-3 border border-black rounded-[60px] font-bold mt-11">
          지점 더 보기
        </button>
      </section>
    </main>
  );
}
