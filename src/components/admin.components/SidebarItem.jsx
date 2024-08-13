const SidebarItem = ({ icon, label, isExpanded, onClick }) => {
  return (
    <div
      className="flex items-center p-3 w-full hover:bg-gray-600 cursor-pointer transition-colors duration-300 ease-in-out rounded-lg"
      onClick={onClick}
    >
      <div className="text-2xl">{icon}</div>
      <span
        className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
        }`}
      >
        {label}
      </span>
    </div>
  );
};
export default SidebarItem;
