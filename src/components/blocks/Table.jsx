import "./Table.css";

const Cell = ({ isFirstRow, firstRowIsHeader, children }) =>
  isFirstRow && firstRowIsHeader ? <th>{children}</th> : <td>{children}</td>;

export default function Table({ content, attributes }) {
  const { firstRowIsHeader } = attributes;
  return (
    <div className="table-block-container">
      <table>
        {content.map((row, index) => (
          <tr>
            {row.map((cell) => (
              <Cell
                firstRowIsHeader={firstRowIsHeader}
                isFirstRow={index === 0}
              >
                {cell}
              </Cell>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
}
