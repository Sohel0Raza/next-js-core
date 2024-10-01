import AboutContent from "@/components/AboutContent";
export const metadata = {
  title: {
    absolute : "About Us"
  },
  description: "About Us page",
};

export default function Page() {
  return (
    <div className="md:py-24 h-screen text-center ">
      <h2 className="text-xl font-semibold mb-10">About Us</h2>
      <AboutContent />
    </div>
  );
}
