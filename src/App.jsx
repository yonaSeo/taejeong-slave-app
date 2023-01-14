import "./css/App.css";
import { faker } from "@faker-js/faker/locale/ko";
import Table from "./components/Table";

faker.seed(100);

function App() {
    const columns = ["이름", "전화번호", "주소"];

    const data = Array(5000)
        .fill()
        .map(() => ({
            name: faker.name.lastName() + faker.name.firstName(),
            phone: faker.phone.phoneNumber(),
            adress: faker.address.city(),
        }));

    return <Table columns={columns} data={data} />;
}

export default App;
