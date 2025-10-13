import type {ColumnDef} from "@tanstack/react-table"

export type Person = {
    firstName : string,
    lastName : string,
    age:number,
    gender : string,
    email : string
}

export const columns : ColumnDef<Person>[] = [
    {
        accessorKey : 'firstName',
        header : 'First Name'
    },
    {
        accessorKey : 'lastName',
        header : 'Last Name',
    },
    {
        accessorKey : 'age',
        header : 'Age',
    },
    {
        accessorKey :'email',
        header : 'Email',
    }

]

