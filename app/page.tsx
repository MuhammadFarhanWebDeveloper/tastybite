import Featured from "@/components/FeaturedProduct/Featured";
import Hero from "@/components/Hero/Hero";
import HotDesserts from "@/components/Hot_Desserts/HotDesserts";
import OrderNow from "@/components/OrderNow/OrderNow";
import PopularRecipe from "@/components/PopularRecipe/PopularRecipe";
import Review from "@/components/Review/Review";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col">
      <div className="">
        <Hero />
      </div>
        <div className="px-4 lg:px-10  py-10 ">
          <HotDesserts />
        </div>
        <div className="px-4 lg:px-10  py-10 ">
          <OrderNow />
        </div>
        <div className="px-4 lg:px-10  py-10 ">
          <PopularRecipe />
        </div>
        <div className="px-4 lg:px-10  py-10 ">
          <Review />
        </div>
    </div>
  );
}
