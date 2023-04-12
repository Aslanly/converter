import axios from "axios";
import {TData} from "../types/types";

 export const getData = async () => {
     try {
         const {data} = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
         console.log(data.data);
         return data
     } catch (error) {
         console.error(error);
     }
 }