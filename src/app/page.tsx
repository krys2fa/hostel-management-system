import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/SignOutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Hostel Management System
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {session.user.name || session.user.email}
              </span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                {session.user.role}
              </span>
              <SignOutButton />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Dashboard
            </h2>
            <p className="text-gray-600">
              ✅ Login successful! You are logged in as{" "}
              <strong>{session.user.role}</strong>.
            </p>
            <p className="text-gray-600 mt-2">
              The dashboard is working properly. Features will be implemented in
              future updates.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
