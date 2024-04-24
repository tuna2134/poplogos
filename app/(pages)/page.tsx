import ImageCard from "@/components/pages/page";
import { getAllLogos } from "@/libs/Logo";
import { NextPage } from "next";

const Page: NextPage = async () => {
  const logos = await getAllLogos();
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-center">サービスロゴたち</h2>
        <p className="mt-4 text-center text-slate-700">
          さわらつき様が書いたロゴをここでまとめてみました。どうぞ気楽にお楽しみください。(本人様から許可もらいました。)
        </p>
      </div>
      <div className="mt-6">
        <div className="grid gap-4 grid-cols-3">
          {logos.map((logo, index) => (
            <ImageCard key={index} src={`/ServiceLogos/${logo.name}/${logo.images[0]}`} name={logo.name} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
