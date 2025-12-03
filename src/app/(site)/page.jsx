import AddsBannerSlider from "@/components/home/AddsBannerSlider";
import FreeShippingCard from "@/components/home/FreeShippingCard";
import Hero from "@/components/home/Hero";
import HomeCatSlider from "@/components/home/HomeCatSlider";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <div className="w-full mb-[400px]">
      <Hero />
      <HomeCatSlider />

      <section className="bg-white py-8">
        <Wrapper>
          <div>
            <div className="flex items-center justify-between">
              <h2>Popular Products</h2>
              <p>Do not miss the current offers until the end of March</p>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="py-5 bg-white">
        <Wrapper>
          <FreeShippingCard />
          <AddsBannerSlider />
        </Wrapper>
      </section>
    </div>
  );
}
