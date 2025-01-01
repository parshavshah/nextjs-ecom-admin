export default function AdminHeaderTitle({title}) {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-800">
        {title}
      </h1>
    </div>
  );
}
