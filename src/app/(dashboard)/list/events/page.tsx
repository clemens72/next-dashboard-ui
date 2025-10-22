import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"
import Link from "next/link"
import Table from "@/components/Table"
import { role, eventsData } from "@/lib/data"
import FormModel from "@/components/FormModel"

type Event = {
  id: string;
  title: string;
  contact: string;
  agent: string[];
}

const columns = [
  {
    header: "Title",
    accessor:"title",
  },
  {
    header: "Contact",
    accessor:"contact",
    className: "hidden md:table-cell",
  },
  {
    header: "Agent",
    accessor:"agent",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor:"action",
  }
]

const EventsListPage = () => {

  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightorange"
    >
      <td className="font-semibold pl-2">{item.title}</td>
      <td className="hidden md:table-cell">{item.contact}</td>
      <td className="hidden md:table-cell">{item.agent}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/events/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-orange">
              <Image src="/view.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <>
            <FormModel table="events" type="update" data={item} id={parseInt(item.id)} />
            <FormModel table="events" type="delete" id={parseInt(item.id)} />
            </>
          )}
        </div>
      </td>
    </tr>
  )

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lightorange">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lightorange">
              <Image src="/sort.png" alt="filter" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModel table="events" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={eventsData}/>
      {/* PAGINATION */}
      <Pagination/>
    </div>
  )
}

export default EventsListPage