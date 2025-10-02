import { CheckCircleIcon } from "@heroicons/react/24/outline"; 
import { CircleStackIcon } from "@heroicons/react/24/outline"; 

function Status({ activeCount, completedCount }) {
  return (
    <div className="flex gap-6 mt-6 mb-6">
      {/* Active Tasks Card */}
      <div className="w-full sm:flex-1 p-5 bg-gradient-to-r from-purple-50 to-white rounded-xl shadow border border-gray-200 flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">Active Tasks</p>
          <p className="text-2xl font-bold">{activeCount}</p>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-purple-400 text-purple-400">
          <CircleStackIcon className="w-6 h-6" />
        </div>
      </div>

      {/* Completed Tasks Card */}
      <div className="w-full sm:flex-1 p-5 bg-gradient-to-r from-green-50 to-white rounded-xl shadow border border-gray-200 flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">Done</p>
          <p className="text-2xl font-bold">{completedCount}</p>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-400 text-green-500">
          <CheckCircleIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
export default Status;