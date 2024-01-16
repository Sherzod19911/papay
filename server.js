const dotenv = require("dotenv");
dotenv.config();
//const http = require("http");
const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URL;
mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, goose) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection success");
      // console.log(goose);
      const server = require("./app");
      // const server = http.createServer(app);
      let PORT = process.env.PORT || 3003;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);



//biz quradigan express bu wip serverlrga misol bula oladi.
// wep serverni  displayga ega bulmagan komputer sifatida kurish mumkin.
//biz yozgan kodlar serverlarda run bulai va hamma unga ulana oladi.
// netwrk architecture jihatdan ikki xil bladi.
//1. client server  yani centralni server ham deydi.
//2. peer to peer  network architechture deydi
// biz hozir quradigan exprees wip  server clientga misol bula oladi.
// peer to peer da centralni server bulmaydi
//bu yerda har bitta qatnashgan serverlarimiz nodedeb atalai.
// bu yerda malumot bir joyda saqlanmayi
// bu yrda bir xil malumotlar bir nechta nodlarda yoziladi.
// har bitta nodelar uzi mustaqil sifatida ishlaydi.
// authentification deganda bizning servrga kim ulanganligini server aniqlashijaryoni hisoblanai.
//authentificationni 3 xil turi bor.
// 1.sessions with cookies,
//2.JWT in cookies, bu json wep tookenni cookiesni ichida ishlatilishi
// JWT with headrs header orqali berish usuli.
// biz session with cookies dan kuproq foydalanamiz
//biz kup malumotlarni 
// browserda 3 xil xotira mavjud
//1.local storage
//2.session storage
//3. cookies
// nimaga biz cookies storegdan kuproq foydaanamiz
//browserga kindir hak yani buzmoqchi bulsa local hamda session storageni buzish mumkin lekin cookiesni 
// zashtasi bularga nisbatan kuchliroq
// shuning uchun cookiesdan faydalanamiz.


