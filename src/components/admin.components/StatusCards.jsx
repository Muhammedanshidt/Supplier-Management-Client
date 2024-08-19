import React from 'react'
import Graph from '../../components/admin.components/Graph';

function StatusCards() {
  const cards = [
    {
      title: "Total Users",
      value: "100,221",
      change: "14%",
      changeDescription: "from 2019",
      bgColor: "bg-blue-100",
      badgeColor: "bg-blue-500",
      bg: "#22235F"
    },
    {
      title: "New Signups",
      value: "10,450",
      change: "22%",
      changeDescription: "from last month",
      bgColor: "bg-blue-100",
      badgeColor: "bg-green-500",
      bg: ""
    },
    {
      title: "Active Users",
      value: "89,750",
      change: "5%",
      changeDescription: "from last week",
      bgColor: "bg-blue-100",
      badgeColor: "bg-yellow-500",
      bg: ""
    },
    {
      title: "Revenue",
      value: "$123,456",
      change: "18%",
      changeDescription: "from last quarter",
      bgColor: "bg-blue-100",
      badgeColor: "bg-red-500",
      bg: ""
    }
  ];
  
  return (
    <>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mx-8">
    {cards.map((card, index) => (
      <div key={index} className={`p-4 transition-shadow border border-gray-300 rounded-lg shadow-sm hover:shadow-lg ${card.bg}`}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col space-y-2">
            <span className="text-gray-400">{card.title}</span>
            <span className="text-lg font-semibold">{card.value}</span>
          </div>
          <div className={`p-10 ${card.bgColor} rounded-md`}></div>
        </div>
        <div>
          <span className={`inline-block px-2 mr-2 text-sm text-white ${card.badgeColor} rounded`}>
            {card.change}
          </span>
          <span>{card.changeDescription}</span>
        </div>
      </div>
    ))}
 
  </div>
  </>
  )
}

export default StatusCards