import React from 'react'
import { useTable } from 'react-table'

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  style: {
                    width: column.width,
                    border: "1px solid black"
                  }
                })}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
            width: '30%',
          },
          {
            Header: 'Manufacturer',
            accessor: 'manufacturer',
            width: '20%',
          },
          {
            Header: 'Style',
            accessor: 'style',
            width: '10%',
          },
          {
            Header: 'Purchase Price',
            accessor: 'purchasePrice',
            width: '10%',
          },
        ],
      },
    ],
    []
  )

  // const data = React.useMemo(() => makeData(20), [])
  const data = [
		{ name: "NameNameNameName", manufacturer: "Manufacturer", style: "Style", purchasePrice: "Purchase Price", salePrice: "Sale Price", qty: 0, commission: 0 },
		{ name: "NameN", manufacturer: "Manufacturer", style: "Style", purchasePrice: "Purchase Price", salePrice: "Sale Price", qty: 0, commission: 0 },
		{ name: "NameNameNameNameB", manufacturer: "Manufacturer", style: "Style", purchasePrice: "Purchase Price", salePrice: "Sale Price", qty: 0, commission: 0 },
	];

  return (
    // <Styles>
      <Table columns={columns} data={data} />
    // </Styles>
  )
}

export default App