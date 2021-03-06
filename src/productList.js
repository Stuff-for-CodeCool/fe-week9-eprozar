import faker from "faker";

//  DON'T TOUCH THESE, ThEY'RE FAKE
const pix = [
    "https://picsum.photos/id/0/500/500/",
    "https://picsum.photos/id/1/500/500/",
    "https://picsum.photos/id/10/500/500/",
    "https://picsum.photos/id/100/500/500/",
    "https://picsum.photos/id/1000/500/500/",
    "https://picsum.photos/id/1001/500/500/",
    "https://picsum.photos/id/1002/500/500/",
    "https://picsum.photos/id/1003/500/500/",
    "https://picsum.photos/id/1004/500/500/",
    "https://picsum.photos/id/1005/500/500/",
    "https://picsum.photos/id/1006/500/500/",
    "https://picsum.photos/id/1008/500/500/",
    "https://picsum.photos/id/1009/500/500/",
    "https://picsum.photos/id/101/500/500/",
    "https://picsum.photos/id/1010/500/500/",
    "https://picsum.photos/id/1011/500/500/",
    "https://picsum.photos/id/1012/500/500/",
    "https://picsum.photos/id/1013/500/500/",
    "https://picsum.photos/id/1014/500/500/",
    "https://picsum.photos/id/1015/500/500/",
    "https://picsum.photos/id/1016/500/500/",
    "https://picsum.photos/id/1018/500/500/",
    "https://picsum.photos/id/1019/500/500/",
    "https://picsum.photos/id/102/500/500/",
    "https://picsum.photos/id/1020/500/500/",
    "https://picsum.photos/id/1021/500/500/",
    "https://picsum.photos/id/1022/500/500/",
    "https://picsum.photos/id/1023/500/500/",
    "https://picsum.photos/id/1024/500/500/",
    "https://picsum.photos/id/1025/500/500/",
    "https://picsum.photos/id/1026/500/500/",
    "https://picsum.photos/id/1027/500/500/",
    "https://picsum.photos/id/1028/500/500/",
    "https://picsum.photos/id/1029/500/500/",
    "https://picsum.photos/id/103/500/500/",
    "https://picsum.photos/id/1031/500/500/",
    "https://picsum.photos/id/1032/500/500/",
    "https://picsum.photos/id/1033/500/500/",
    "https://picsum.photos/id/1035/500/500/",
    "https://picsum.photos/id/1036/500/500/",
    "https://picsum.photos/id/1037/500/500/",
    "https://picsum.photos/id/1038/500/500/",
    "https://picsum.photos/id/1039/500/500/",
    "https://picsum.photos/id/104/500/500/",
    "https://picsum.photos/id/1040/500/500/",
    "https://picsum.photos/id/1041/500/500/",
    "https://picsum.photos/id/1042/500/500/",
    "https://picsum.photos/id/1043/500/500/",
    "https://picsum.photos/id/1044/500/500/",
    "https://picsum.photos/id/1045/500/500/",
    "https://picsum.photos/id/1047/500/500/",
    "https://picsum.photos/id/1048/500/500/",
    "https://picsum.photos/id/1049/500/500/",
    "https://picsum.photos/id/1050/500/500/",
    "https://picsum.photos/id/1051/500/500/",
    "https://picsum.photos/id/1052/500/500/",
    "https://picsum.photos/id/1053/500/500/",
    "https://picsum.photos/id/1054/500/500/",
    "https://picsum.photos/id/1055/500/500/",
    "https://picsum.photos/id/1056/500/500/",
    "https://picsum.photos/id/1057/500/500/",
    "https://picsum.photos/id/1058/500/500/",
    "https://picsum.photos/id/1059/500/500/",
    "https://picsum.photos/id/106/500/500/",
    "https://picsum.photos/id/1060/500/500/",
    "https://picsum.photos/id/1061/500/500/",
    "https://picsum.photos/id/1062/500/500/",
    "https://picsum.photos/id/1063/500/500/",
    "https://picsum.photos/id/1064/500/500/",
    "https://picsum.photos/id/1065/500/500/",
    "https://picsum.photos/id/1066/500/500/",
    "https://picsum.photos/id/1067/500/500/",
    "https://picsum.photos/id/1068/500/500/",
    "https://picsum.photos/id/1069/500/500/",
    "https://picsum.photos/id/107/500/500/",
    "https://picsum.photos/id/1070/500/500/",
    "https://picsum.photos/id/1071/500/500/",
    "https://picsum.photos/id/1072/500/500/",
    "https://picsum.photos/id/1073/500/500/",
    "https://picsum.photos/id/1074/500/500/",
    "https://picsum.photos/id/1075/500/500/",
    "https://picsum.photos/id/1076/500/500/",
    "https://picsum.photos/id/1077/500/500/",
    "https://picsum.photos/id/1078/500/500/",
    "https://picsum.photos/id/1079/500/500/",
    "https://picsum.photos/id/108/500/500/",
    "https://picsum.photos/id/1080/500/500/",
    "https://picsum.photos/id/1081/500/500/",
    "https://picsum.photos/id/1082/500/500/",
    "https://picsum.photos/id/1083/500/500/",
    "https://picsum.photos/id/1084/500/500/",
    "https://picsum.photos/id/109/500/500/",
    "https://picsum.photos/id/11/500/500/",
    "https://picsum.photos/id/110/500/500/",
    "https://picsum.photos/id/111/500/500/",
    "https://picsum.photos/id/112/500/500/",
    "https://picsum.photos/id/113/500/500/",
    "https://picsum.photos/id/114/500/500/",
    "https://picsum.photos/id/115/500/500/",
    "https://picsum.photos/id/116/500/500/",
];

const productList =
    JSON.parse(localStorage.getItem("eprozar-products")) ||
    Array(100)
        .fill()
        .map((_, i) => ({
            id: faker.random.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(10, 400, 2, "$"),
            shortDescription: faker.lorem.sentence(),
            description: faker.lorem.sentences(),
            image: pix[i],
            category: faker.commerce.department(),
            discount: Math.floor(Math.random() * 35) / 100,
            discountDate: faker.date.soon(2),
        }));

localStorage.setItem("eprozar-products", JSON.stringify(productList));

export default productList;
