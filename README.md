- Proje kodları http://github.com/talipgurakar/creditCardsAPI adresinde bulunmaktadır.

- https://www.loom.com/share/3e08daccab204278b1bc8bd25dd6032d linkindeki videoda mimarisini anlattım.

- Bu proje POSTGRESQL Database kullanıyor.
- dbTables.sql dosyasındaki tabloların create edilmesi gerekiyor.

- Node Versiyon 16 ve üstü olmalı.
- Nest.js kütüphanesi kullanıldı.

- Vs Code da proje "npm run start:dev" komutuyla çalıştırılır.

- Vs Code da yüklenen Thunder Client aracılığıyla API ler çalıştırılıyor.


- GET  - http://localhost:3000/customers - müşterilerin hepsini çekiyor.
- GET  - http://localhost:3000/customers/1 - ilgili müşteri bilgilerini çekiyor.
- POST - http://localhost:3000/customers - yeni müşteri bilgisi ekliyor.
 ( 
  Body JSON kısmına aşağıdaki kod yazılarak denenebilir.
   " 
   {
      "GovernmentID" : "63163052804", 
      "Name" : "Talip",
      "Surname" : "Gürakar", 
      "Foreigner" : false, 
      "BirthDate" : "1983-03-12"
    }
   "
 )

- GET  - http://localhost:3000//creditcards - kredi kartlarının hepsini çekiyor.
- GET  - http://localhost:3000//creditcards/1 - ilgili kredi kartı bilgilerini çekiyor.
- POST - http://localhost:3000/creditcards - yeni kredi kartı bilgisi ekliyor.
(
  Body JSON kısmına aşağıdaki kod yazılarak denenebilir. - 
  "
    {
      "customerID": "18",
      "cardType": "1",
      "cardNumber": "1234432156788765",
      "cardHolderName": "Yağmur Gürakar",
      "expiryMonth": "3",
      "expiryYear": "2025",
      "cvv": "234",
      "accountCutOffDate": "2023-11-20",
      "lastPaymentDate": "2023-11-30",
      "isMailTelephoneOrderEnabled": false,
      "isInternetOrderEnabled": false,
      "isAbroadUsageEnabled": false
    }
  "

  cardType - normalde front endden gelecek visa, mastercard şeklinde ama default 1 gönderdim.
)

- PATCH - http://localhost:3000/creditcards/1/updatelimit - ilgili "1" nolu kredi kartının limit bilgisi güncelleniyor.
(
  Body JSON kısmına aşağıdaki kod yazılarak denenebilir.
  "
  {
    "cardId" : "1", 
    "cardLimit" : "150000"
  }
  "
)

- POST - http://localhost:3000/creditcards/createtransaction - kredi kartından harcama yapılıyor.
 (
  Body JSON kısmına aşağıdaki kod yazılarak denenebilir.
  "
  {
    "cardNumber": "1234432156788765",
    "cardHolderName": "Yağmur Gürakar",
    "expiryMonth": "3",
    "expiryYear": "2025",
    "cvv": "234",
    "amount": "25000",
    "merchant": "MİGROS",
    "category": "1"
  }
  "
)

- GET  - http://localhost:3000//creditcards/4/createtransaction - ilgili "4" nolu kredi kartının harcama bilgilerini çekiyor.



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
