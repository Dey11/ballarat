import Header from "@/components/header";
import Footer from "@/components/footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="p-4">
        <Header />
        {children}
      </div>{" "}
      <Footer />
    </div>
  );
}
