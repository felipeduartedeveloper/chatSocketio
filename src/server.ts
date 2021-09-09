import { serverHttp } from "./http";
import "./websocket.ts";

serverHttp.listen(3000, () => console.log("Server is Running 🌐 on PORT 3000"));