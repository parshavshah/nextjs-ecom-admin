import AdminHeaderTitle from "@/components/admin-header-title";
import AdminSidebar from "@/components/admin-sidebar";

export const metadata = {
  title: "E-Commerce Admin",
  description: "E-Commerce Admin",
};

export default function AdminLayout({ children }) {
  return (
    <body className="bg-gray-100 font-sans">
      <div className="flex h-screen flex-col md:flex-row">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <AdminHeaderTitle title="Welcome to Your Dashboard" />
          <div className="flex-grow p-6">{children}</div>
        </div>
      </div>
    </body>
  );
}
