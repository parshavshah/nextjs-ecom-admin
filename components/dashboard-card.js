export default function DashboardCard({ title, description }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}
