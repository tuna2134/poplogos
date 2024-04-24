import ImageCard from "@/components/pages/page";
import { NextPage } from "next";
import Image from "next/image";

const Page: NextPage = () => {
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
          <Image src="/React.png" alt="React" width={782} height={400} />
          <Image src="/React.png" alt="React" width={782} height={400} />
          <Image src="/React.png" alt="React" width={782} height={400} />
          <ImageCard />
        </div>
      </div>
    </>
  );
}

export default Page;