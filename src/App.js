import EmployeeTable from "./components/EmployeeTable";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <EmployeeTable />
      </div>
    </>
  );
}

export default App;
