import Sidebar from "@/components/Sidebar";
import Script from "next/script";

export default function WithLayout({ children }) {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10 p-6 my-6 mr-8 border border-gray-300 rounded-xl shadow-lg">
          {children}
        </div>
      </div>
    </>
  );
}
