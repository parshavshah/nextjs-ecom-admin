import Link from "next/link";

export default function AdminSidebar() {
  return (
    <div className="w-full md:w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white flex flex-col shadow-lg">
      <div className="p-4 text-center text-lg font-bold border-b border-blue-500">
        E-Commerce Admin
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li>
            <Link
              href="/admin/product"
              className="block p-3 rounded-lg hover:bg-blue-700 flex items-center"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/admin/product/add"
              className="block p-3 rounded-lg hover:bg-blue-700 flex items-center"
            >
              Add Product
            </Link>
          </li>
          <hr/>
          <li>
            <Link
              href="/admin/product"
              className="block p-3 rounded-lg hover:bg-blue-700 flex items-center"
            >
              List Order
            </Link>
          </li>
          <hr/>
          <li>
            <Link
              href="/admin/product"
              className="block p-3 rounded-lg hover:bg-blue-700 flex items-center"
            >
              List Users
            </Link>
          </li>
          <li>
            <Link
              href="/admin/product/add"
              className="block p-3 rounded-lg hover:bg-blue-700 flex items-center"
            >
              Add User
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-blue-500">
        <a
          href="#"
          className="block p-3 text-center rounded-lg bg-blue-700 hover:bg-blue-800"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
