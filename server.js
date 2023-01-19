import * as dotenv from 'dotenv';
dotenv.config();
import { app } from "./config/app.js";

const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});