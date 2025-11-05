import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/components/DashboardLayout";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Dashboard
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Welcome back, {session.user.name || session.user.email}!
            </p>
          </div>
        </div>

        {/* Sales Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Daily Sales */}
          <div className="bg-primary-500 rounded-lg p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h6 className="text-sm font-medium opacity-90 mb-2">
                Daily Sales
              </h6>
              <h3 className="text-3xl font-bold mb-1">$249.95</h3>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-sm opacity-90">67%</span>
                <div className="flex-1 bg-white/20 rounded-full h-1.5">
                  <div
                    className="bg-white rounded-full h-1.5"
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <i className="ti ti-trending-up text-8xl"></i>
            </div>
          </div>

          {/* Monthly Sales */}
          <div className="bg-success-500 rounded-lg p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h6 className="text-sm font-medium opacity-90 mb-2">
                Monthly Sales
              </h6>
              <h3 className="text-3xl font-bold mb-1">$2,942.32</h3>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-sm opacity-90">36%</span>
                <div className="flex-1 bg-white/20 rounded-full h-1.5">
                  <div
                    className="bg-white rounded-full h-1.5"
                    style={{ width: "36%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <i className="ti ti-calendar text-8xl"></i>
            </div>
          </div>

          {/* Yearly Sales */}
          <div className="bg-warning-500 rounded-lg p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h6 className="text-sm font-medium opacity-90 mb-2">
                Yearly Sales
              </h6>
              <h3 className="text-3xl font-bold mb-1">$8,638.32</h3>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-sm opacity-90">80%</span>
                <div className="flex-1 bg-white/20 rounded-full h-1.5">
                  <div
                    className="bg-white rounded-full h-1.5"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <i className="ti ti-chart-line text-8xl"></i>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Students */}
          <div className="bg-white dark:bg-[#2b2c2f] rounded shadow-card border-0 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Total Students
                </p>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  12,281
                </h3>
              </div>
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                <i className="ti ti-users text-primary-500 text-2xl"></i>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-success-500 font-medium">+7.2%</span>
              <span className="text-gray-500 dark:text-gray-400">
                from last month
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Target: 35,098</span>
                <span>Duration: 350 days</span>
              </div>
            </div>
          </div>

          {/* Available Rooms */}
          <div className="bg-white dark:bg-[#2b2c2f] rounded shadow-card border-0 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Available Rooms
                </p>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  11,200
                </h3>
              </div>
              <div className="w-12 h-12 bg-success-500/10 rounded-lg flex items-center justify-center">
                <i className="ti ti-home text-success-500 text-2xl"></i>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-success-500 font-medium">+6.2%</span>
              <span className="text-gray-500 dark:text-gray-400">
                occupancy rate
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Target: 34,185</span>
                <span>Duration: 800 days</span>
              </div>
            </div>
          </div>

          {/* Total Revenue */}
          <div className="bg-white dark:bg-[#2b2c2f] rounded shadow-card border-0 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Total Revenue
                </p>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  10,500
                </h3>
              </div>
              <div className="w-12 h-12 bg-warning-500/10 rounded-lg flex items-center justify-center">
                <i className="ti ti-coin text-warning-500 text-2xl"></i>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-success-500 font-medium">+5.9%</span>
              <span className="text-gray-500 dark:text-gray-400">
                total earnings
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Target: 25,998</span>
                <span>Duration: 900 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Rating Card */}
          <div className="bg-white dark:bg-[#2b2c2f] rounded shadow-card border-0 p-6">
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Rating
            </h5>
            <div className="flex items-center gap-8 mb-6">
              <div className="text-center">
                <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-100">
                  4.7
                </h2>
                <div className="flex items-center gap-1 mt-2 text-warning-500">
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-half-filled"></i>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  0.4 overall
                </p>
              </div>
              <div className="flex-1 space-y-2">
                {[
                  { stars: 5, count: 384, width: "90%" },
                  { stars: 4, count: 145, width: "60%" },
                  { stars: 3, count: 24, width: "30%" },
                  { stars: 2, count: 1, width: "5%" },
                  { stars: 1, count: 0, width: "0%" },
                ].map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 dark:text-gray-400 w-4">
                      {item.stars}
                    </span>
                    <i className="ti ti-star text-warning-500 text-sm"></i>
                    <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-warning-500 rounded-full h-2"
                        style={{ width: item.width }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 w-8">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Users */}
          <div className="bg-white dark:bg-[#2b2c2f] rounded shadow-card border-0 p-6">
            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Recent Users
            </h5>
            <div className="space-y-4">
              {[
                {
                  name: "Student Application",
                  date: "11 MAY 12:56",
                  status: "pending",
                },
                {
                  name: "Room Assignment",
                  date: "11 MAY 10:35",
                  status: "pending",
                },
                {
                  name: "Payment Request",
                  date: "9 MAY 17:38",
                  status: "pending",
                },
                {
                  name: "Maintenance Report",
                  date: "19 MAY 12:56",
                  status: "pending",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                      <i className="ti ti-user text-primary-500"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs font-medium text-danger-500 hover:bg-danger-500/10 rounded transition-colors">
                      Reject
                    </button>
                    <button className="px-3 py-1 text-xs font-medium text-success-500 hover:bg-success-500/10 rounded transition-colors">
                      Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
