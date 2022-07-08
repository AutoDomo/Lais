import Data from "./data.json";

const dataArray = Object.entries(Data);

export const dataMap = dataArray.map(item => 
    { 
        return {
            description: item[1].Descricao,
            enviroment: item[1].nome_ambiente,
            deviceCode: item[1].username_iphone,
            deviceType: item[1].type_kappelt,
            enviromentId: item[1].ambiente
        } 
    }
);
