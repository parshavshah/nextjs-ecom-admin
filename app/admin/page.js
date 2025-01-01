import DashboardCard from "@/components/dashboard-card";

export default function AdminPage() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Products"
          description="There are total 20 products"
        />
        <DashboardCard title="Orders" description="There are total 20 orders" />
        <DashboardCard
          title="Users"
          description="There are total 100 products"
        />
      </div>
    </>
  );
}
