import faker from "faker";

//  DON'T TOUCH THESE, ThEY'RE FAKE

const buildEntry = (id) => ({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(10, 400, 2, "$"),
    shortDescription: faker.lorem.sentence(),
    description: faker.lorem.sentences(),
    image: `https://picsum.photos/id/${id}/500/500/`,
    category: Array(Math.floor(Math.random() * 3) + 1)
        .fill()
        .map(() => faker.commerce.department())
        .filter((e, i, a) => !a.slice(0, i).includes(e))
        .sort((a, b) => (a > b ? 1 : -1)),
    discount: Math.floor(Math.random() * 35) / 100,
    discountDate: faker.date.soon(2),
});

const generated = [
    "0",
    "1",
    "10",
    "100",
    "1000",
    "1001",
    "1002",
    "1003",
    "1004",
    "1005",
    "1006",
    "1008",
    "1009",
    "101",
    "1010",
    "1011",
    "1012",
    "1013",
    "1014",
    "1015",
    "1016",
    "1018",
    "1019",
    "102",
    "1020",
    "1021",
    "1022",
    "1023",
    "1024",
    "1025",
    "1026",
    "1027",
    "1028",
    "1029",
    "103",
    "1031",
    "1032",
    "1033",
    "1035",
    "1036",
    "1037",
    "1038",
    "1039",
    "104",
    "1040",
    "1041",
    "1042",
    "1043",
    "1044",
    "1045",
    "1047",
    "1048",
    "1049",
    "1050",
    "1051",
    "1052",
    "1053",
    "1054",
    "1055",
    "1056",
    "1057",
    "1058",
    "1059",
    "106",
    "1060",
    "1061",
    "1062",
    "1063",
    "1064",
    "1065",
    "1066",
    "1067",
    "1068",
    "1069",
    "107",
    "1070",
    "1071",
    "1072",
    "1073",
    "1074",
    "1075",
    "1076",
    "1077",
    "1078",
    "1079",
    "108",
    "1080",
    "1081",
    "1082",
    "1083",
    "1084",
    "109",
    "11",
    "110",
    "111",
    "112",
    "113",
    "114",
    "115",
    "116",
]
    .map(buildEntry)
    .sort((a, b) => (a.id < b.id ? -1 : 1));

const localStorageHandling = () => {
    let ls = localStorage.getItem("eprozar-products");

    if (ls) {
        return JSON.parse(ls);
    }

    localStorage.setItem("eprozar-products", JSON.stringify(generated));
    return generated;
};

export const generated_products = localStorageHandling();