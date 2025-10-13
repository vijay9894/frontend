import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}


function DataTable<TData, TValue>({columns , data} : DataTableProps<TData , TValue>){
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel : getCoreRowModel(),
    })
   
    return (
        <div className="">
            <Table>
                <TableHeader>
                       {table.getHeaderGroups().map((headerGroup) => (
                          <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header)=>{
                                    return(
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header , header.getContext())}
                                        </TableHead>
                                    )
                                })}
                          </TableRow>
                       ))} 
                </TableHeader>
            </Table>
        </div>
    )
}
export default DataTable;